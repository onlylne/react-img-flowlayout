import React from 'react';
import ReactDom from 'react-dom';
import styles from './index.css';

interface Props {
  containerWidth?: string,
  columns: number,
  gutter?: number,
  imgMgb?: number,
  dataSource: Array<string>,
}

export default class ImgFlowLayout extends React.PureComponent<Props> {
  crefs: Array<any>;
  heights: Array<number>;
  imgs: Array<Array<JSX.Element>>;
  dataSource: Array<string>;
  constructor(props: Props) {
    super(props);
    this.crefs = Array.from({ length: props.columns }, () => React.createRef());
    this.heights = Array.from({ length: props.columns }, () => 0);
    this.imgs = Array.from({ length: props.columns }, () => []);
    this.dataSource = [];
  }

  componentDidMount() {
    this.updateImg();
  }

  componentDidUpdate() {
    this.updateImg();
  }

  getMinIndex = () => {
    const min = Math.min(...this.heights);
    return this.heights.indexOf(min);
  }

  updateImg = () => {
    const { dataSource } = this.props;
    const start = this.dataSource.length;
    const newImgs = dataSource.slice(start);
    this.renderImg(newImgs);
  }

  renderImg = (imgList: Array<string>) => {
    if (imgList.length === 0) return;
    const imgs = imgList.slice(0);
    const img = imgs.shift();
    const { imgMgb = 4 } = this.props;

    const updateHeights = () => {
      this.heights[minIndex] = this.crefs[minIndex].current.clientHeight;
      if (imgs.length > 0) {
        this.renderImg(imgs);
      } else {
        this.dataSource = this.props.dataSource;
      }
    }

    const minIndex = this.getMinIndex();
    this.imgs[minIndex].push(<img style={{ marginBottom: imgMgb }} onLoad={updateHeights} key={img} src={img} />);

    const imgArr = this.imgs[minIndex].slice(0);

    ReactDom.render(imgArr, this.crefs[minIndex].current);
  }

  renderColumns = () => {
    const { containerWidth = '100%', columns, gutter = 4 } = this.props;
    let cw, unit;
    if (containerWidth.includes('%')) {
      unit = '%';
      cw = parseFloat(containerWidth.replace('%', '')) / columns;
    } else if (containerWidth.includes('vw')) {
      unit = 'vw';
      cw = parseFloat(containerWidth.replace('vw', '')) / columns;
    } else if (containerWidth.includes('px')) {
      unit = 'px';
      cw = parseFloat(containerWidth.replace('px', '')) / columns;
    }

    const style = {
      width: `${cw}${unit}`,
      marginLeft: gutter / 2,
      marginRight: gutter / 2,
    }

    return (
      <>
        {this.crefs.map((item, index) => <div key={index} style={style}><div ref={this.crefs[index]} /></div>)}
      </>
    )
  }

  render() {

    return (
      <>
        <div className={styles.img__layout}>
          {this.renderColumns()}
        </div>
      </>
    )
  }
}
