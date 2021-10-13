import { faHeading, faImage, faImages, faParagraph, faPlay, faQuoteRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import RGL, { WidthProvider } from "react-grid-layout";
import dragImg from '../../assets/img/dragndrop.png';
import './Home.scss';
const ReactGridLayout = WidthProvider(RGL);

function Home() {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
  }, []);
  const typo = [
    { icon: faParagraph, title: "Paragraph", w: 6, h: 3, type: "p", default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae blanditiis molestias hic est quod nesciunt quae alias assumenda commodi! Ratione similique error ab laboriosam placeat sed obcaecati neque minima soluta." },
    { icon: faHeading, title: "Heading", w: 2, h: 2, type: "h2", default: "Heading" },
    { icon: faQuoteRight, title: "Blockquote", w: 12, h: 4, type: "bq", default: "This is a Blockquote" },
  ]
  const media = [
    { icon: faImage, title: "Image", w: 6, h: 2, type: "img", default: null, disabled: true },
    { icon: faPlay, title: "Video", w: 2, h: 2, type: "video", default: null, disabled: true },
    { icon: faImages, title: "Gallery", w: 12, h: 4, type: "gallery", default: null, disabled: true },
  ]

  const [gridLayout, setGridLayout] = useState<any[]>([]);

  const [showHover, setShowHover] = useState(false)

  const [draggedItem, setDraggedItem] = useState({
    icon: '', title: '', w: 0, h: 0, type: '', default: '', disabled: false
  });
  useEffect(() => {
    window.addEventListener("keydown", keyPressHandler);
    return () => {

    }
  }, [])
  const generateTypoBlock = () => {
    return typo.map((x, i) => {
      return (<Col md="4">
        <div draggable="true" onDragStart={(e) => e.dataTransfer.setData("text/plain", "")} onDrag={() => { dragHandler(x) }} unselectable="on"
          key={(Math.random() * 100).toString()}>
          <Card>
            <FontAwesomeIcon icon={x.icon} />
            <p>{x.title}</p>
          </Card>
        </div>
      </Col>)
    })
  }
  const generateTypoList = () => {
    return typo.map((x) => {
      return (
        <li onClick={() => addItem(x)}>
          <div key={(Math.random() * 100).toString()} className="d-flex align-items-center">
            <FontAwesomeIcon icon={x.icon} />
            <p>{x.title}</p>
          </div>
        </li>)
    })
  }

  const addItem = (item: any) => {
    let newElement = { i: (gridLayout.length + 1).toString(), x: 0, y: 0, w: item.w, h: item.h, type: item.type, value: item.default }
    setGridLayout([...gridLayout, newElement])
    generateLayout()
    setShowHover(false)
  }

  const dropHandler = (layout: any, layoutItem: any, _event: any) => {
    let newElement = { i: (gridLayout.length + 1).toString(), x: layoutItem.x, y: layoutItem.y, w: draggedItem.w, h: draggedItem.h, type: draggedItem.type, value: draggedItem.default }
    setGridLayout([...gridLayout, newElement])
    generateLayout()
  }


  const dragHandler = (item: any) => {
    setDraggedItem(item);
  }

  const generateMediaBlock = () => {
    return media.map((x) => {
      return (<Col md="4">
        <div draggable={x.disabled ? false : true} onClick={() => alert('Comming Soon..')} onDragStart={() => dragHandler(x)}
          key={(Math.random() * 100).toString()}>
          <Card className={x.disabled ? "disabled" : ''}>
            <FontAwesomeIcon icon={x.icon} />
            <p>{x.title}</p>
          </Card>
        </div>
      </Col>)
    })
  }

  const removeItem = (index: any) => {
    let value = gridLayout.filter(x => x.i !== index)
    setGridLayout(value);
  }

  const generateLayout = () => {
    return gridLayout.map((item) => {
      return (<div key={item.i} className="element" data-grid={{ x: item.x, y: item.y, w: item.w, h: item.h, resizeHandles: ['sw', 'nw', 'se',] }}>
        <button onClick={() => removeItem(item.i)} type="button">
          X
        </button>
        {getDiv(item.type, item.value)}
      </div>)
    })
  }
  const getDiv = (type: string, value: string) => {
    if (type === 'p') {
      return (<p contentEditable>
        {value}
      </p>)
    };
    if (type === 'h2') {
      return (<h2 contentEditable>
        {value}
      </h2>)
    };
    if (type === 'bq') {
      return (<blockquote contentEditable>
        {value}
      </blockquote>)
    };
  }

  const keyPressHandler = (e: any) => {
    console.log(e.key)
    if (e.key === "/") {
      setShowHover(true)
    }
    if (e.key === "Escape") {
      setShowHover(false)
    }
  }

  return (
    <Container fluid>
      <Row>
        <Col md="9" className="workArea">
          {
            gridLayout.length === 0 ?
              <div className="dropArea">
                <img src={dragImg} alt="drop area" />
                <div className="heading">
                  Drop Area
                </div>
                <div className="muted">
                  Or press "/" to get options to add
                </div>
              </div>
              : ''
          } <ReactGridLayout
            className="layout"
            onDrop={dropHandler}
            measureBeforeMount={false}
            isDroppable={true}
            rowHeight={30}
          >
            {generateLayout()}
          </ReactGridLayout>
        </Col>
        <Col md="3" className="p-0">
          <div className="itemsArea">
            <div className="group">
              <div className="heading">
                Typography
                <hr />
              </div>
              <div className="options">
                <Container>
                  <Row>
                    {generateTypoBlock()}
                  </Row>
                </Container>
              </div>
            </div>
            <div className="group">
              <div className="heading">
                Media
                <hr />
              </div>
              <div className="options">
                <Container>
                  <Row>
                    {generateMediaBlock()}
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {
        showHover ?
          <div className="hoverOptions">
            <button className="close" onClick={() => setShowHover(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <Card>
              <h6 >
                Typography
              </h6>
              <hr />
              <ul>
                {generateTypoList()}
              </ul>
            </Card>
          </div> : ""
      }

    </Container>
  );
}

export default Home;