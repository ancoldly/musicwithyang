function closeCogBackgroud() {
    var cogBackgroud = document.querySelector('.cog-backgroud');
    cogBackgroud.classList.add('hidden');
    cogBackgroud.classList.remove('flex');
}

function closeCogUser() {
    var cogUser = document.querySelector('.cog-user');
    cogUser.classList.add('hidden');
    cogUser.classList.remove('flex');
}

function closeCogList() {
    var cogBackgroud = document.querySelector('.cog-list');
    cogBackgroud.classList.add('hidden');
    cogBackgroud.classList.remove('flex');
}

function toggleCogBackgroud() {
    var cogBackgroud = document.querySelector('.cog-backgroud');
    var cogUser = document.querySelector('.cog-user');
    var cogList = document.querySelector('.cog-list');

    cogBackgroud.classList.toggle('hidden', cogBackgroud.classList.contains('flex'));
    cogBackgroud.classList.toggle('flex');

    cogUser.classList.add('hidden');
    cogUser.classList.remove('flex');

    cogList.classList.add('hidden');
    cogList.classList.remove('flex');
}

function toggleCogUser() {
    var cogBackgroud = document.querySelector('.cog-backgroud');
    var cogUser = document.querySelector('.cog-user');
    var cogList = document.querySelector('.cog-list');

    cogUser.classList.toggle('hidden', cogUser.classList.contains('flex'));
    cogUser.classList.toggle('flex');

    cogBackgroud.classList.add('hidden');
    cogBackgroud.classList.remove('flex');

    cogList.classList.add('hidden');
    cogList.classList.remove('flex');
}

function toggleCogList() {
    var cogBackgroud = document.querySelector('.cog-backgroud');
    var cogUser = document.querySelector('.cog-user');
    var cogList = document.querySelector('.cog-list');

    cogList.classList.toggle('hidden', cogList.classList.contains('flex'));
    cogList.classList.toggle('flex');

    cogBackgroud.classList.add('hidden');
    cogBackgroud.classList.remove('flex');

    cogUser.classList.add('hidden');
    cogUser.classList.remove('flex');
}