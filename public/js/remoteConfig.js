remoteConfig.settings = {
    minimumFetchIntervalMillis: 3600000,
};
  
remoteConfig.defaultConfig = ({
    'welcome_message': 'Remote Config Default Configuration is on',
    // background images
    "mainSliderBackgroundImage": `url("images/bg/pexels-cottonbro-4100672.jpg")`,
    "secondSliderBackgroundImage": `url("images/bg/pexels-cottonbro-4098224.jpg")`,
    "especialidadesBackgroundImage" : `url("images/bg/pexels-cottonbro-4100663.jpg")`,
    "textosBackgroundImage": `url("images/bg/pexels-prateek-katyal-2740956.jpg")`,

  });
  
  console.log(remoteConfig.defaultConfig.welcome_message);


// INDEX.HTML VARIABLES

const mainSliderBackgroundImage = document.querySelector("#mainSliderBackgroundImage");
mainSliderBackgroundImage.style.backgroundImage = remoteConfig.defaultConfig.mainSliderBackgroundImage;
const secondSliderBackgroundImage = document.querySelector("#secondSliderBackgroundImage");
secondSliderBackgroundImage.style.backgroundImage = remoteConfig.defaultConfig.secondSliderBackgroundImage;
const especialidadesBackgroundImage = document.querySelector("#especialidades");
especialidadesBackgroundImage.style.backgroundImage = remoteConfig.defaultConfig.especialidadesBackgroundImage;
const textosBackgroundImage = document.querySelector("#textos");
textosBackgroundImage.style.backgroundImage = remoteConfig.defaultConfig.textosBackgroundImage;

/*  
Foto de cottonbro no Pexels
Foto de Prateek Katyal no Pexels

*/