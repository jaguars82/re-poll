// Language data store

export default class LanguageModel {
  constructor(options) {
    this.enterKey = 'Enter'
    this.shiftKey = 'Shift'
    this.ok = 'OK'
    this.continue = 'Дальше'
    this.skip = 'Пропустить'
    this.pressEnter = 'Нажмите :enterKey'
    this.multipleChoiceHelpText = 'Выберите один или несколько вариантов'
    this.multipleChoiceHelpTextSingle = 'Выберите один вариант'
    this.otherPrompt = 'Другое'
    this.placeholder = 'Напечатайте свой вариант...'
    this.submitText = 'Готово'
    this.longTextHelpText = ':shiftKey + :enterKey to make a line break.'
    this.prev = 'Назад'
    this.next = 'Дальше'
    this.percentCompleted = ':percent% завершено'
    this.invalidPrompt = 'Пожалуйста, укажите корректное значение'
    this.thankYouText = 'Спасибо!'
    this.successText = 'Мы получили Вашу информацию'
    this.ariaOk = 'Нажмите, чтобы продолжить'
    this.ariaRequired = 'Эту информацию нужно обязательно указать'
    this.ariaPrev = 'Следующий шаг'
    this.ariaNext = 'Предыдущий шаг'
    this.ariaSubmitText = 'Нажмите, чтобы отправить'
    this.ariaMultipleChoice = 'Нажмите :letter для выбора'
    this.ariaTypeAnswer = 'Напечатайте Ваш ответ здесь'
    this.errorAllowedFileTypes = 'Неверный тип файла. Допустимые типы: :fileTypes.'
    this.errorMaxFileSize = 'Файл(ы) слишком большой. Максимальный размер: :size.'
    this.errorMinFiles = 'Недостаточно файлов. Минимум нужно: :min.'
    this.errorMaxFiles = 'Слишком много файлов. Максимум можно: :max.'

    Object.assign(this, options || {})
  }

  /**
   * Inserts a new CSS class into the language model string to format the :string
   * Use it in a component's v-html directive: v-html="language.formatString(language.languageString)"
   */
  formatString(string, replacements) {
    return string.replace(/:(\w+)/g, (match, word) => {
      if (this[word]) {
        return '<span class="f-string-em">' + this[word] + '</span>'
      } else if (replacements && replacements[word]) {
        return replacements[word]
      }
      
      return match
    })
  }

  formatFileSize(bytes) {
    const
      units = ['б', 'Кб', 'Мб', 'Гб', 'Тб'],
      i = bytes > 0 ? Math.floor(Math.log(bytes) / Math.log(1024)) : 0
      
    return (bytes / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + units[i];
  }
}


