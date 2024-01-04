import catalan from './lang/ca.json'
import spanish from './lang/es.json'

const LANGUAGES = {
    CATALAN: 'ca',
    SPANISH: 'es'
}


type CurrentLocale = string | undefined

export const getI18n = ( currentLocale : CurrentLocale) => {

    switch( currentLocale ){
        case undefined:
            return spanish
        case LANGUAGES.CATALAN:
            return catalan
        case LANGUAGES.SPANISH:
            return spanish
    }

    return spanish

}