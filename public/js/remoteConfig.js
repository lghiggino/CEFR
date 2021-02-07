remoteConfig.settings = {
    minimumFetchIntervalMillis: 3600000,
};
  
remoteConfig.defaultConfig = ({
    'welcome_message': 'Remote Config Default Configuration is on',
    // background images
    "mainSliderBackgroundImage": `url("images/bg/IMG_0046_resized-.jpg")`,
    "secondSliderBackgroundImage": `url("images/bg/pexels-cottonbro-4098224.jpg")`,
    "especialidadesBackgroundImage" : `url("images/bg/IMG_0074_resized-.jpg")`,
    "lacanBackgroundImage" : `url("images/bg/lacan2-1024x702.jpg")`,
    "textosBackgroundImage": `url("images/bg/pexels-prateek-katyal-2740956.jpg")`,
    "foreignBackgroundImage": `url("images/bg/woman-holding-hands-together-talking-with-counselor.jpg")`,
  });
  
  console.log(remoteConfig.defaultConfig.welcome_message);


// INDEX.HTML VARIABLES

const mainSliderBackgroundImage = document.querySelector("#mainSliderBackgroundImage");
mainSliderBackgroundImage.style.backgroundImage = remoteConfig.defaultConfig.mainSliderBackgroundImage;
const secondSliderBackgroundImage = document.querySelector("#secondSliderBackgroundImage");
secondSliderBackgroundImage.style.backgroundImage = remoteConfig.defaultConfig.secondSliderBackgroundImage;
const especialidadesBackgroundImage = document.querySelector("#especialidades");
especialidadesBackgroundImage.style.backgroundImage = remoteConfig.defaultConfig.especialidadesBackgroundImage;
const lacanBackgroundImage = document.querySelector("#lacan");
lacanBackgroundImage.style.backgroundImage = remoteConfig.defaultConfig.lacanBackgroundImage;
const textosBackgroundImage = document.querySelector("#textos");
textosBackgroundImage.style.backgroundImage = remoteConfig.defaultConfig.textosBackgroundImage;
const englishForeignBackgroundImage = document.querySelector("#english");
englishForeignBackgroundImage.style.backgroundImage = remoteConfig.defaultConfig.foreignBackgroundImage;
const frenchForeignBackgroundImage= document.querySelector("#francais");
frenchForeignBackgroundImage.style.backgroundImage = remoteConfig.defaultConfig.foreignBackgroundImage;

/*  
Foto de cottonbro no Pexels
Foto de Prateek Katyal no Pexels
<a href='https://www.freepik.com/photos/health'>Health photo created by freepik - www.freepik.com</a>
*/