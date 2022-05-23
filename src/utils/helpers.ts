import { I18nManager, DevSettings } from 'react-native'

export const changeLanguage = () => {
    I18nManager.forceRTL(!I18nManager.isRTL);
    DevSettings.reload();
};

