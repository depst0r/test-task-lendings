(function () {
    var config = JSON.parse(
        '{"defaultAvatar":"img/default-avatar.jpg","rtl":false,"headless":false,"commLang":"ID"}'
      );
      let defaultAvatar = document.getElementById('111').getAttribute('src');
      config.defaultAvatar = defaultAvatar
    var commentTranslations = JSON.parse('{"defaultName":"Tamu","defaultDate":"at the moment"}');
    var commentsContainer = document.querySelector('#comment-component-text');
    var firstComment = document.querySelector('#comment-component-text .comment');
    var lastComment = document.querySelector('#comment-component-text .comment:last-of-type');
    var commentBtn = document.querySelector('#comment-component-text .add-comment-button');
    var textArea = document.querySelector('#comment-component-text .txt-content');
    var yourName = document.querySelector('#comment-component-text #yourName');
    //comment

    function addComment(msg, yourNameValue = commentTranslations.defaultName, img = config.defaultAvatar, time = commentTranslations.defaultDate) {
      var firstComment = commentsContainer.querySelector('.comment');
      var newComment;
      if (lastComment !== null) {
        var timestamp = new Date().getTime();
        newComment = lastComment.cloneNode(true);
        newComment.classList.remove('reply');
        newComment.removeAttribute('style');
        newComment.classList.add('newComment', 'date' + timestamp);
        newComment.querySelectorAll('.comment__name').forEach(function (elem) {
          elem.innerHTML = yourNameValue;
        });
        newComment.querySelectorAll('.comment__text').forEach(function (elem) {
          elem.innerHTML = msg;
        });
        newComment.querySelectorAll('.comment__image').forEach(function (elem) {
          elem.setAttribute('src', img);
        });
        newComment.querySelectorAll('.likes').forEach(function (elem) {
          elem.innerHTML = 0;
        });
        newComment.querySelectorAll('.comment__time').forEach(function (elem) {
          elem.innerHTML = time;
        });
        toggleLike(newComment);
      }
      commentsContainer.insertBefore(newComment, firstComment);
      fadeInComment(document.querySelector('.date' + timestamp));

    };

    //add comment on click
    if (commentBtn !== null) {
      commentBtn.addEventListener('click', function () {
        var msg = textArea.value;
        var yourNameValue = yourName.value || commentTranslations.defaultName;

        if (msg.trim().length > 0 && yourNameValue.trim().length > 0) {
          textArea.value = '';
          yourName.value = '';

          addComment(msg, yourNameValue);
        };
      });
    }
    // show new comment after scroll
    var scrollCount = 0;
    if (document.querySelectorAll('.firstComment').length > 0) {
      window.addEventListener('scroll', function () {
        var scrollValue = window.pageYOffset + window.innerHeight;
        var commentsOffsetY = firstComment.offsetTop;
        if (scrollValue > commentsOffsetY && scrollCount === 0) {
          setTimeout(function () {
            var firstComment = document.querySelector('.firstComment');
            fadeInComment(firstComment);
          }, 2000);
          scrollCount = 1;
        };
      });

    }

    function fadeInComment(elem) {
      elem.style.display = 'flex';
      setTimeout(function () {
        elem.style.opacity = '1';
        elem.style.maxHeight = '1000px';
      }, 25)
    }
    commentsContainer.querySelectorAll('.comment').forEach(function (elem) {
      toggleLike(elem);
    });

    function toggleLike(comment) {
      let likeBtn = comment.querySelector('.comments__like');
      let likeNum = comment.querySelector('.likes');
      // checking if current theme has like buttons;
      if (likeBtn !== null && likeNum !== null) {
        if (/^\d*$/gi.test(likeNum.innerHTML)) {
          likeBtn.addEventListener('click', function () {
            if (likeBtn.style.fontWeight == '700') {
              likeNum.innerHTML -= 1;
              likeBtn.style.fontWeight = '400';
            } else {
              likeNum.innerHTML = parseInt(likeNum.innerHTML) + 1;
              likeBtn.style.fontWeight = '700';
            }
          })
        }
      }
    }
  })();