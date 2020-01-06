import React, { useState, useEffect } from 'react';
import ImgFlowLayout from '@/components/ImgFlowLayout';
import styles from './index.css';

const imgSource = [
  'http://img5.imgtn.bdimg.com/it/u=2988027538,756364027&fm=15&gp=0.jpg',
  'http://img3.imgtn.bdimg.com/it/u=3915635618,415033913&fm=15&gp=0.jpg',
  'http://img2.imgtn.bdimg.com/it/u=2985285416,1997513080&fm=15&gp=0.jpg',
  'http://img1.imgtn.bdimg.com/it/u=491445476,2839265513&fm=15&gp=0.jpg',
  'http://img5.imgtn.bdimg.com/it/u=501543021,1267996826&fm=15&gp=0.jpg',
  'http://img5.imgtn.bdimg.com/it/u=126512050,240993889&fm=15&gp=0.jpg',
  'http://img1.imgtn.bdimg.com/it/u=3887196194,3590496477&fm=26&gp=0.jpg',
  'http://img2.imgtn.bdimg.com/it/u=1268344881,3973085661&fm=15&gp=0.jpg',
  'http://img0.imgtn.bdimg.com/it/u=737761376,492998986&fm=15&gp=0.jpg',
  'http://img3.imgtn.bdimg.com/it/u=98166077,2960687764&fm=15&gp=0.jpg',
  'http://img5.imgtn.bdimg.com/it/u=1750619677,3397181192&fm=15&gp=0.jpg',
  'http://img1.imgtn.bdimg.com/it/u=2548094497,3225371812&fm=15&gp=0.jpg',
  'http://img4.imgtn.bdimg.com/it/u=379151424,89397220&fm=15&gp=0.jpg',
  'http://img1.imgtn.bdimg.com/it/u=4084155909,4089166316&fm=26&gp=0.jpg',
  'http://img4.imgtn.bdimg.com/it/u=1188387633,958216909&fm=26&gp=0.jpg',
  'http://img1.imgtn.bdimg.com/it/u=2546612145,2936515136&fm=26&gp=0.jpg',
  'http://img2.imgtn.bdimg.com/it/u=2594606066,1233403812&fm=26&gp=0.jpg',
  'http://img1.imgtn.bdimg.com/it/u=2414147878,2298949477&fm=26&gp=0.jpg',
  'http://img5.imgtn.bdimg.com/it/u=3784731410,1117417537&fm=26&gp=0.jpg',
  'http://img0.imgtn.bdimg.com/it/u=229933714,837367352&fm=26&gp=0.jpg',
  'http://img0.imgtn.bdimg.com/it/u=2393566677,2213002297&fm=26&gp=0.jpg',
  'http://img2.imgtn.bdimg.com/it/u=1370862150,2786969486&fm=26&gp=0.jpg',
  'http://img1.imgtn.bdimg.com/it/u=216144500,4020973931&fm=26&gp=0.jpg',
  'http://img4.imgtn.bdimg.com/it/u=2051747638,3807137530&fm=26&gp=0.jpg',
  'http://img5.imgtn.bdimg.com/it/u=136104178,4278330209&fm=26&gp=0.jpg',
  'http://img1.imgtn.bdimg.com/it/u=3076678778,825507461&fm=26&gp=0.jpg',
  'http://img4.imgtn.bdimg.com/it/u=3919829731,797253613&fm=26&gp=0.jpg',
  'http://img4.imgtn.bdimg.com/it/u=2517967838,3700207032&fm=26&gp=0.jpg',
  'http://img1.imgtn.bdimg.com/it/u=1113029660,654510665&fm=26&gp=0.jpg',
  'http://img0.imgtn.bdimg.com/it/u=4043770626,2199700438&fm=26&gp=0.jpg',
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=287125773,287860206&fm=15&gp=0.jpg',
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1366324828,2948648085&fm=15&gp=0.jpg',
  'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1803886362,2061295602&fm=15&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3689208494,2146628607&fm=15&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2416212533,2255911630&fm=15&gp=0.jpg',
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3872012518,2584915593&fm=15&gp=0.jpg',
  'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2606863225,943077821&fm=15&gp=0.jpg',
  'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2585346408,29687434&fm=15&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1621310161,1315923340&fm=26&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3927165609,2403858506&fm=15&gp=0.jpg',
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3823326996,756753799&fm=15&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3434817298,3447264127&fm=26&gp=0.jpg',
  'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1318008454,2552437080&fm=26&gp=0.jpg',
  'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3336062863,218968667&fm=26&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3255577612,816553051&fm=26&gp=0.jpg',
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1081266440,3339989237&fm=26&gp=0.jpg',
  'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2371444265,2605742433&fm=26&gp=0.jpg',
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1132378245,2289714150&fm=26&gp=0.jpg',
  'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3663331715,4079905197&fm=26&gp=0.jpg',
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3739737218,2198542607&fm=26&gp=0.jpg',
]

export default function () {
  const [dataSource, setDataSource] = useState<Array<string>>([]);
  const [page, setPage] = useState<number>(0);

  const lookmore = (page: number = 0, size: number = 20) => {
    const newdata = imgSource.slice(page * size, (page + 1) * size);
    const data = dataSource.concat(newdata);
    setDataSource(data);
  }

  useEffect(() => {
    lookmore(page);
  }, [page])

  // const pageChange = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   setPage(page + 1); e.preventDefault()
  // }

  const toBottom = () => {
    console.log('到底了，做点什么吧')
    setPage(page + 1);
  }

  return (
    <div className={styles.normal}>
      <ImgFlowLayout columns={5} dataSource={dataSource} toBottom={toBottom} />
      {/* <a href="#" onClick={pageChange}>加载更多</a> */}
    </div>
  );
}
