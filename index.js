function introduction(name)
{
return(`Hi, my name is ${name}.`);
}
function introductionWithLanguage(name,language)
{
return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
function introductionWithLanguageOptional(name,language="JavaScript")
{
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}


indroduction("Josh");
introductionWithLanguage('Josh','Ember.j');
introductionWithLanguageOptional('Gracie',language);
introductionWithLanguageOptional("Gracie","Python");


