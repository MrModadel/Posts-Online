// Функция для обработки клика на кнопке "Показать/скрыть комментарии"
function toggleComments() {
  // Находим родительский элемент кнопки (пост)
  const post = this.closest('.post');
  // Находим блок комментариев внутри поста
  const comments = post.querySelector('.comments');

  // Переключаем класс 'hidden', чтобы скрыть или показать блок комментариев
  comments.classList.toggle('hidden');

  // Проверяем текущее состояние блока комментариев
  const isHidden = comments.classList.contains('hidden');

  // Изменяем текст кнопки в зависимости от состояния блока комментариев
  if (isHidden) {
      this.textContent = 'Показать комментарии';
  } else {
      this.textContent = 'Скрыть комментарии';
  }
}

// Находим все кнопки "Показать/скрыть комментарии" и добавляем обработчик события на каждую из них
const toggleButtons = document.querySelectorAll('.toggle-comments-btn');
toggleButtons.forEach(button => {
  button.addEventListener('click', toggleComments);
});
