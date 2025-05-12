import {Grid , Typography ,Box , Button} from '@mui/material'
import doctoerImage from '../../../../assets/image/doctor2.jpg'
import classes from './adviceSection.module.css'
export default function NewDiscover({IsMobile}) {
  return (
    <Grid container className={`${classes.containerOfNewDiscoverSubSection} ${classes.containerTypoSection}`}>
        {!IsMobile && <Grid item xs={6}>
            <img src={doctoerImage} alt='doctoer' width='90%' />
        </Grid>}
        <Grid item xs={IsMobile ? 12 : 6}>
            <Typography variant='subtitle1'>
            1- اكتشاف جديد في علاج السرطان حيث أن العلماء يطورون أساليب جديدة لعلاج بعض أنواع السرطان بفعالية أكبر وتقليل الآثار الجانبية.
            </Typography>
            <hr />
            <Typography variant='subtitle1'>
            2- تقنية جديدة لعلاج أمراض القلب التي تساعد في علاج وتحسين حالات أمراض القلب بشكل أفضل.
            </Typography>
            <hr />
            <Typography variant='subtitle1'>
            3- التقدم في علاج الأمراض العصبية التي تفتح آفاقًا جديدة لعلاج الأمراض العصبية وتحسين جودة حياة المرضى.
            </Typography>
            {IsMobile && <Box mb={4}>
            <img src={doctoerImage} alt='doctoer' width='90%' />
            </Box>}
            <Box>
                <Button>قراءة المزيد من الأخبار الحديثة</Button>
            </Box>
        </Grid>
        
    </Grid>
  )
}
