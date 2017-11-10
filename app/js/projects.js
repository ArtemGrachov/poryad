const projectsData = {
    'sirius1': {
        slider: {
            imgUrls: ['./img/projects/sirius/slide1.png', 'https://dummyimage.com/445x430/000000/ffffff.jpg&text=sirius+slide2', 'https://dummyimage.com/445x430/000000/ffffff.jpg&text=sirius+slide3'],
            logo: './img/projects/sirius/logo.png'
        },
        price: 0,
        title: 'Збираємо кошти на харчування тварин #ДАЙ5!',
        name: 'Притулок Сіріус',
        description: '<p>Що можна купити на 5 гривень? Більше, ніж ти думаєш – цілий день ситого життя для одного безпритульного собаки! Ми знову запускаємо естафету #ДАЙ5 і закликаємо всіх підтримати понад дві тисячі вихованців найбільшого в Україні притулку для тварин "Сіріус"</p><p>Поліпшити умови очікування справжнього дому просто: перераховуй 5 або більше гривень на картку притулку Приватбанк<br><span class="red">5169 3305 1043 1114, </span><br>Мезінова О. В. (директора притулку)<br>або через сайт <br><a href="http://sheltersirius.org">http://sheltersirius.org</a>                    і передай естафету друзям.</p><p>Також можна налаштувати регулярний платіж і годувати хвостів на постійній <br>основі. Як це зробити, дивись тут: <br><a href="нgoo.gl/cYzT3Y">нgoo.gl/cYzT3Y</a></p>',
        contacts: {
            tel: '067 123 45 67',
            socials: {
                fb: '#',
                vk: '#'
            },
            site: {
                url: 'http://dogcat.com.ua',
                text: 'www.dogcat.com.ua'
            },
            map: {
                address: 'Україна, Київська область, село Федорівка',
                location: {
                    lat: 50.878862,
                    lng: 30.268079
                }
            }
        }
    },
    'sirius2': {
        slider: {
            imgUrls: ['https://dummyimage.com/445x430/ffffff/000000.jpg&text=sirius+slide1', 'https://dummyimage.com/445x430/ffffff/000000.jpg&text=sirius+slide2', 'https://dummyimage.com/445x430/ffffff/000000.jpg&text=sirius+slide3'],
            logo: './img/projects/sirius/logo.png'
        },
        price: 0,
        title: 'Необхідно провести вакцинацію собак',
        name: 'Притулок Сіріус',
        description: '<p>Et minim deserunt duis proident qui sit id dolor voluptate consequat esse ut tempor. Laboris officia laborum nulla pariatur minim ut consequat eiusmod irure quis aute. Lorem cillum magna exercitation ipsum dolore tempor mollit. Dolor sit sunt ea aute eiusmod ea non proident ad fugiat laborum incididunt quis est. Eu sit ex nulla ipsum laborum nisi nostrud excepteur cupidatat ullamco ut. Eu ad ullamco dolor officia labore do quis velit Lorem excepteur tempor adipisicing. In quis minim irure amet ex non do enim.</p><p>Esse pariatur ex reprehenderit duis esse ea ut mollit eiusmod ad tempor qui velit. Do irure sint dolore incididunt incididunt nisi sint sunt pariatur Lorem. Quis consequat proident dolore commodo sunt est magna voluptate officia non sint.<br><span class="red">5169 3305 1043 1114, </span><br>Мезінова О. В. (директора притулку)<br>або через сайт <br><a href="http://sheltersirius.org">http://sheltersirius.org</a>                    і передай естафету друзям.</p><p>Також можна налаштувати регулярний платіж і годувати хвостів на постійній <br>основі. Як це зробити, дивись тут: <br><a href="нgoo.gl/cYzT3Y">нgoo.gl/cYzT3Y</a></p>',
        contacts: {
            tel: '067 123 45 67',
            socials: {
                fb: '#',
                vk: '#'
            },
            site: {
                url: 'http://dogcat.com.ua',
                text: 'www.dogcat.com.ua'
            },
            map: {
                address: 'Україна, Київська область, село Федорівка',
                location: {
                    lat: 50.878862,
                    lng: 30.268079
                }
            }
        }
    },
    'ameda': {
        slider: {
            imgUrls: ['https://dummyimage.com/445x430/b1d400/000000.jpg&text=ameda+slide1', 'https://dummyimage.com/445x430/ffffff/b1d400.jpg&text=ameda+slide2', 'https://dummyimage.com/445x430/ffffff/b1d400.jpg&text=ameda+slide3'],
            logo: 'https://dummyimage.com/445x430/ffffff/000000.jpg&text=ameda+logo'
        },
        price: 2500,
        title: 'Потрібні кошти на лікування Шарика',
        name: 'Притулок Амеда',
        description: '<p>Enim ex commodo sit est. Labore non veniam cupidatat nisi occaecat ut sunt excepteur. Non proident nisi sit culpa. Commodo do magna excepteur ullamco deserunt minim consectetur elit nulla irure reprehenderit consectetur consequat. In exercitation sunt laborum ad. Esse proident fugiat labore proident tempor laborum dolor nostrud id. Incididunt voluptate laboris enim quis id in laborum ipsum ea est Lorem quis.</p><p>Deserunt nulla commodo nisi tempor. Esse ea duis elit id id eu. Deserunt cupidatat sunt enim voluptate Lorem duis Lorem velit reprehenderit anim. Eu id officia deserunt labore id. Nostrud dolore sunt do laborum et sint amet mollit anim dolore elit proident sint consectetur.</p><p><span class="red">Quis minim velit cupidatat ex dolore.</span></p><p>Culpa laborum aute elit tempor laboris do pariatur sunt pariatur excepteur adipisicing cupidatat veniam. Non proident magna ea veniam do. Et Lorem ut anim amet occaecat incididunt commodo duis.</p>',
        contacts: {
            tel: '097 999 55 33',
            socials: {
                fb: '#',
                vk: '#'
            },
            site: {
                url: 'http://ameda.com.ua',
                text: 'www.ameda.com.ua'
            },
            map: {
                address: 'Україна, м. Київ',
                location: {
                    lat: 50.878862,
                    lng: 30.268079
                }
            }
        }
    }
}

const projectSelector = function () {
    $('.positions-nav__info').on('click', function (e) {
        e.preventDefault();
        const $this = $(this);
        selectProject($this.attr('id'));
    })
}

const selectProject = function (id) {
    const project = projectsData[id];
    $('#projectPrice').text(
        project.price > 0 ? project.price + ' грн.' : 'сума необмежена'
    );
    $('#projectDesc')
        .html(project.description);
    $('#projectTitle')
        .text(project.title);
    $('#projectName')
        .text(project.name);
    $('#projectNameCnt')
        .text(project.name);
    $('#projectTel')
        .text(project.contacts.tel);
    $('#projectSite')
        .text(project.contacts.site.text)
        .attr('href', project.contacts.site.url);
    $('#projectAddress')
        .text(project.contacts.map.address);
    $('#projectLogo')
        .attr('src', project.slider.logo)
    const sliderList = $('#projectSlider')
        .find('.slider-list')

    sliderList.slick('removeSlide', null, null, true);

    for (let url of project.slider.imgUrls) {
        sliderList
            .slick('slickAdd', `<li class="slider-item"><img class="project-slider__img" src="${url}"></li>`)
    }
}