
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      className="text-sm"
    >
      {language === 'en' ? 'FR' : 'EN'}
    </Button>
  );
};

export default LanguageToggle;
