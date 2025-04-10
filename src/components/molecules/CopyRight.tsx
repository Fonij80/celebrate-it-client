import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

export const CopyRight = () => {
    const { t } = useTranslation();

    return (
        <Typography variant="body2">
            {t("footer.copyright")}
        </Typography>
    )
}