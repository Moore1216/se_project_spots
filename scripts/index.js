const editProfileBtn = document.querySelector('.profile__edit-btn');
const editProfileModal = document.querySelector('#edit-profile-modal');
const editProfileBtnClose = editProfileModal.querySelector('.modal__close-btn');

const newPostBtn = document.querySelector('.profile__add-btn'); // FIXED
const newPostModal = document.querySelector('#new-post-modal');
const newPostBtnClose = newPostModal.querySelector('.modal__close-btn');


editProfileBtn.addEventListener('click', function () {
    editProfileModal.classList.add('modal_is-opened');
});

newPostBtn.addEventListener('click', function () {
    newPostModal.classList.add('modal_is-opened');
});


editProfileBtnClose.addEventListener('click', function () {
    editProfileModal.classList.remove('modal_is-opened');
});

newPostBtnClose.addEventListener('click', function () {
    newPostModal.classList.remove('modal_is-opened');
});
