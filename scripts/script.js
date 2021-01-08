// Crossing out the card's text
$("body").on("click", ".task-card-info__check", function () {
    if ($(this).is(':checked')) {
        $(this).closest('.task-card-info').parent('.task-card').find('.task-card__text').addClass('text-lined');
        $(this).closest('.task-card-info').parent('.task-card').find('.task-card__title').children('.task-card__title_span').addClass('text-lined');
    }
    else {
        $(this).closest('.task-card-info').parent('.task-card').find('.task-card__text').removeClass('text-lined');
        $(this).closest('.task-card-info').parent('.task-card').find('.task-card__title').children('.task-card__title_span').removeClass('text-lined');
    }
});

// Open/Close the extra menu inside the card
$("body").on("click", ".task-card__extra", function (e) {
    e.preventDefault();
    $(this).parent('.task-card__title').children('.task-card-settings').toggleClass('task-card-settings-active')
});

// Delete card
$("body").on("click", ".task-card-settings__delete", function (e) {
    e.preventDefault();
    $(this).closest('.task-card').parent('.col-6').remove()
});

// Edit menu adding tagger

$('.edit-tags__link').click(function (e) {
    e.preventDefault();
    $('.edit-tags__link').removeClass('edit-tags__active')
    $(this).addClass('edit-tags__active')
});

// Edit Card
$("body").on("click", ".task-card-settings__edit", function (e) {
    e.preventDefault();
    $('.task-card').removeClass('edit-task-card');
    $('.edit').addClass('edit-active');
    $(this).closest('.task-card').addClass('edit-task-card');
    let originalTitle = $(this).closest('.task-card__title').children('.task-card__title_span').text();
    let originalText = $(this).closest('.task-card').children('.task-card__text').text();
    let originalCol6 = $(this).closest('.task-card').parent('.col-6');
    originalTag = originalCol6.attr('data-filter');

    taggerForWork = $('.siderbar-list__link_icon_w').closest('.edit-tags__link')
    taggerForStudy = $('.siderbar-list__link_icon_s').closest('.edit-tags__link')
    taggerForEntertainment = $('.siderbar-list__link_icon_e').closest('.edit-tags__link')
    taggerForFamily = $('.siderbar-list__link_icon_f').closest('.edit-tags__link')
    taggerForOther = $('.siderbar-list__link_icon_o').closest('.edit-tags__link')
    console.log(taggerForOther);

    if (originalTag == 'work') {
        taggerForWork.addClass('edit-tags__active')
    }

    else if (originalTag == 'study') {
        taggerForStudy.addClass('edit-tags__active')
    }

    else if (originalTag == 'entertainment') {
        taggerForEntertainment.addClass('edit-tags__active')
    }

    else if (originalTag == 'family') {
        taggerForFamily.addClass('edit-tags__active')
    }

    else if (originalTag == 'other') {
        taggerForOther.addClass('edit-tags__active')
    }


    // выводим оригинальный текста
    $(".editJqueryClass").val(originalTitle)
    $('.edit-form__textarea').text(originalText);

    // клик по save
    $("body").on("click", ".edit-top__link_save", function (e) {
        $('.edit').removeClass('edit-active');
        $('.task-card-settings').removeClass('task-card-settings-active')
        const titleEdit = document.querySelector('.edit-form__title').value;
        const textEdit = document.querySelector('.edit-form__textarea').value;

        // тут мы вышли в title и text элемента
        let edited = $(this).closest('body').children('.main').children('.main__container').children('.tasks').children('.task__container').children('.row').children('.col-6').children('.edit-task-card');
        let editedTitle = edited.children('.task-card__title').children('.task-card__title_span');
        let editedText = edited.children('.task-card__text')
        editedTitle.text(titleEdit);
        editedText.text(textEdit);

        // работа с тэгами

        let editInput;
        let editIconType;
        if ($('.add-tags__link').hasClass('add-tags__active')) {
            tagInput = $('.add-tags').find('.add-tags__active').text().trim();
        }
    
        else {
            if ($('.add-tags__link').hasClass('add-tags__active')) {
                tagInput = $('.add-tags').find('.add-tags__active').text().trim();
            }
    
            else {
                if ($('.add-tags__link').hasClass('add-tags__active')) {
                    tagInput = $('.add-tags').find('.add-tags__active').text().trim();
                }
    
                else {
                    console.log('None');
                }
            }
        }
    
        if (tagInput == 'work') {
            tagIconType = 'siderbar-list__link_icon_w';
        }
    
        else if (tagInput == 'study') {
            tagIconType = 'siderbar-list__link_icon_s';
        }
    
        else if (tagInput == 'entertainment') {
            tagIconType = 'siderbar-list__link_icon_e';
        }
    
        else if (tagInput == 'family') {
            tagIconType = 'siderbar-list__link_icon_f';
        }
    
        else if (tagInput == 'other') {
            tagIconType = 'siderbar-list__link_icon_o';
        }

    });
});

// Close Edit Card
$('.edit-top__link_cancel').click(function (e) {
    e.preventDefault();
    $('.edit').removeClass('edit-active');
});

// Filter in sidebar
$('.siderbar-list__link[data-filter]').click(function () {
    let attr = $(this).attr('data-filter');
    if (attr == 'all') {
        $('.col-6').stop().slideDown()
    }
    else {
        $('.col-6').stop().slideUp()
    }

    $(`.col-6[data-filter=${attr}]`).stop().slideDown()
});

// Black theme
$('.theme-toggler').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active-toggler');
    if ($(this).hasClass('active-toggler')) {
        $('head').append('<link rel="stylesheet" href="css/darkstyle.css">');
        $('.theme-toggler').text('light theme');
        $('.theme-toggler').addClass('toggler-light');
    }

    else {
        $('link[href="css/darkstyle.css"]').remove()
        $('.theme-toggler').text('dark theme');
        $('.theme-toggler').removeClass('toggler-light');
    }
});

// Opening add menu
$('.nav__add').click(function (e) {
    e.preventDefault();
    $('.add').toggleClass('add-active')
});

// Closing add menu
$('.add-top__link_cancel').click(function (e) {
    e.preventDefault();
    $('.add').removeClass('add-active')
}
);

// Choosing a tag
$('.add-tags__link').click(function (e) {
    e.preventDefault();
    $('.add-tags__link').removeClass('add-tags__active')
    $(this).addClass('add-tags__active')
});

// Adding a item
$('.add-top__link_add').click(function () {
    $('.add').removeClass('add-active');
    const titleInput = document.querySelector('.add-form__title').value;
    const textInput = document.querySelector('.add-form__textarea').value;

    let tagInput;
    let tagIconType;
    let tagIconColor;
    if ($('.add-tags__link').hasClass('add-tags__active')) {
        tagInput = $('.add-tags').find('.add-tags__active').text().trim();
    }

    else {
        if ($('.add-tags__link').hasClass('add-tags__active')) {
            tagInput = $('.add-tags').find('.add-tags__active').text().trim();
        }

        else {
            if ($('.add-tags__link').hasClass('add-tags__active')) {
                tagInput = $('.add-tags').find('.add-tags__active').text().trim();
            }

            else {
                console.log('None');
            }
        }
    }

    if (tagInput == 'work') {
        tagIconType = 'siderbar-list__link_icon_w';
    }

    else if (tagInput == 'study') {
        tagIconType = 'siderbar-list__link_icon_s';
    }

    else if (tagInput == 'entertainment') {
        tagIconType = 'siderbar-list__link_icon_e';
    }

    else if (tagInput == 'family') {
        tagIconType = 'siderbar-list__link_icon_f';
    }

    else if (tagInput == 'other') {
        tagIconType = 'siderbar-list__link_icon_o';
    }

    $('.row').append(`
    <div class="col-6" data-filter="${tagInput}">
        <div class="task-card">
            <h3 class="task-card__title">
                <span class="task-card__title_span">${titleInput}</span>
                <a class="task-card__extra" href="#!"><i class=" fal fa-ellipsis-h"></i></a>
                <ul class="task-card-settings">
                    <li><a class="task-card-settings__link task-card-settings__edit" href="#!">Edit</a></li>
                    <li><a class="task-card-settings__link task-card-settings__delete" href="#!">Delete</a></li>
                </ul>
            </h3>
            <p class="task-card__text">${textInput}</p>
            
            <div class="task-card-info">
                <ul class="task-card-info-tags">
                <li>
                    <a class="task-card-info-tags__list" href="#!">
                        <i class="siderbar-list__link_icon ${tagIconType} fas fa-circle"></i>
                    </a>
                </li>
                </ul>
                <div class="task-card-info__done">
                    <input class="task-card-info__check" type="checkbox" name="task_done">
                    <label class="task-card-info__label" for="task-card-info__check">Done</label>
                </div>
            </div>
        </div>
    </div>`);
})