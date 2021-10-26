function openNav(){
    document.getElementById('navHeader').style.height = '90px';

    document.getElementById('navigation').style.transition = "2s";
    document.getElementById('navigation').style.contentVisibility = "visible";

    document.getElementById('openNav').classList.toggle('hide');


}

function closeNav(){

    document.getElementById('navHeader').style.height = '70px';
    
    document.getElementById('navigation').style.transition = "2s";
    document.getElementById('navigation').style.contentVisibility = "hidden";    

    document.getElementById('openNav').classList.toggle('hide');

    
}