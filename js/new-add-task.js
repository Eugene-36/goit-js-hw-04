const database = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
    greet(language) {
      if (this[language] === undefined) {
        return 'Welcome';
      }
      return this[language];
    },
  };
  
  const dataNeData = {
    irish: 'Failte1',
    };
  
    let a = database.greet.bind(dataNeData);
  
  console.log(a('irish'));
  
  console.log(database.greet('english'));
  console.log(database.greet('dutch'));
  console.log(database.greet('IP_ADDRESS_INVALID'));
  