import React from "react";
import "./home.css";
function Home() {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n.badge {\n fill: currentcolor;\n  opacity: 0.15;\n}\n\n.control {\n  position: absolute;\n  right: 0;\n  top: 5rem;\n}\n\n.control label {\n  padding-right: 1rem;\n  transition: all 0.2s cubic-bezier(0.8, 0.1, 0.1, 1.3);\n  opacity: 0.3;\n}\n\ninput[name="control"],\n#mode,\ninput[name="floor"] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\nbody {\n  overflow: hidden;\n  color: #038fc7;\n  margin: 0 auto;\n  padding: 0;\n}\n\n.bg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n[for="temp"],\n[for="lights"],\n[for="media"],\n[for="open"] {\n  padding-left: 1em;\n}\n\n#temp:checked ~ .control [for="temp"],\n#lights:checked ~ .control [for="lights"],\n#media:checked ~ .control [for="media"],\n#open:checked ~ .control [for="open"] {\n  transform: translate(-1em, 0);\n  opacity: 1;\n  box-shadow: 0 0.3em 0 -0.1em;\n}\n\n.open,\n.media,\n.lights,\n.temp {\n  opacity: 0;\n  transition: all 1s ease;\n}\n\n#open:checked ~ * .open,\n#media:checked ~ * .media,\n#lights:checked ~ * .lights,\n#temp:checked ~ * .temp {\n  opacity: 1;\n  animation: appear 1.2s ease;\n}\n\n#mode:checked ~ .bg {\n  transition: background 1s ease;\n  background-color: #003143;\n  background-image: linear-gradient(-45deg, #001520, #015f97);\n  color: white;\n}\n\n#mode:checked ~ * text {\n  fill: #003143;\n}\n\ntext {\n  fill: #fff;\n  font-size: 3px;\n  font-weight: 300;\n  text-anchor: middle;\n  text-align: center;\n}\n\n.control:before,\n.bg:before {\n  content: "";\n  transition: all 1.3s ease;\n  opacity: 0;\n  background-color: currentcolor;\n  display: block;\n  border-radius: 50%;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  left: 25%;\n  width: 50vw;\n  margin-top: -25vh;\n  height: 50vw;\n}\n\n#mode:checked ~ .bg:before {\n  opacity: 0;\n  transform: scale(0);\n}\n\n.icon {\n  fill: none;\n  stroke: currentcolor;\n  stroke-width: 0.45;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n#mode:checked ~ .bg:before {\n  animation: change 1.5s linear 1;\n  transform: scale(3);\n}\n\n#mode:not(:checked) ~ .bg:before {\n  animation: changed 1.5s linear 1;\n  transform: scale(0);\n}\n\n@keyframes change {\n  30% {\n    opacity: 0.35;\n  }\n}\n@keyframes changed {\n  30% {\n    opacity: 0.35;\n  }\n}\nlabel[for="mode"] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 6rem;\n  text-align: center;\n  z-index: 9;\n}\n\npath {\n  fill: currentcolor;\n}\n\nsvg {\n  max-height: 80vh;\n  margin-right: 6rem;\n}\n\n* {\n  box-sizing: border-box;\n width: auto;\n height: auto;\n overflow: hidden;\n  font-family: sans-serif;\n  user-select: none;\n}\n\n.wall {\n  stroke: currentcolor;\n  fill: none;\n  stroke-width: 0.5;\n  stroke-linecap: square;\n  stroke-linejoin: miter;\n}\n\n.detail {\n  stroke: currentcolor;\n  stroke-opacity: 0.5;\n  fill: none;\n  stroke-width: 0.15;\n  stroke-linecap: butt;\n  stroke-linejoin: miter;\n}\n\n#up:not(:checked) ~ * .upstairs path,\n#down:not(:checked) ~ * .downstairs path {\n  opacity: 0;\n  stroke-dasharray: 0, 50;\n}\n\n#up:checked ~ * .upstairs path,\n#down:checked ~ * .downstairs path {\n  stroke-dasharray: 50, 0;\n  stroke-dashoffset: 20;\n  transition: all 1s ease;\n}\n\n[for="down"],\n[for="up"] {\n  width: 50%;\n  text-align: center;\n  opacity: 0.3;\n}\n\n[for="down"] {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n#down:checked ~ .floor [for="down"],\n#up:checked ~ .floor [for="up"] {\n  color: currentcolor;\n  opacity: 1;\n}\n\nlabel {\n  cursor: pointer;\n  padding: 1rem 0;\n  display: block;\n  letter-spacing: 0.05em;\n}\n\n.upstairs,\n.downstairs {\n  opacity: 0;\n  transition: all 1s ease;\n  transform: scale(1.025) translate(-1.25%, -1.25%);\n}\n\n.downstairs {\n  opacity: 0;\n  transition: all 1s ease;\n  transform: scale(0.95) translate(2.5%, 2.5%);\n}\n\n#down:checked ~ * .downstairs {\n  opacity: 1;\n  transform: scale(1);\n}\n\n#up:checked ~ * .upstairs {\n  opacity: 1;\n  transform: scale(1);\n}\n\n.floor {\n  position: relative;\n  width: 80%;\n  margin: 0 auto;\n}\n\n.floor:before {\n  content: "";\n  z-index: 9;\n  top: 3em;\n  display: block;\n  position: absolute;\n  height: 0.25em;\n  border-radius: 0.25em;\n  width: 40%;\n  background-color: currentcolor;\n  transition: all 0.25s cubic-bezier(0.8, 0.1, 0.1, 1.3);\n  left: 0;\n  left: 5%;\n}\n\n#down:checked ~ .floor:before {\n  left: 55%;\n}\n\n.base {\n  opacity: 0.23;\n}\n\n[for="mode"] span:before {\n  display: block;\n  position: absolute;\n  top: -15;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n#mode:checked ~ div [for="mode"] span:before {\n  content: "Modalit\\00e0\\aGiorno";\n}\n\n#mode:not(:checked) ~ div [for="mode"] span:before {\n  content: "Modalit\\00e0\\aNotte";\n}\n\n\n',
        }}
      />
      {/* basic-bitch state management*/}
      {/* night mode*/}
      <input type='checkbox' id='mode' defaultChecked='' />
      <div className='bg'>
        <label htmlFor='mode'>
          <span />
        </label>
        <input type='radio' name='floor' id='up' defaultChecked='' />
        <input type='radio' name='floor' id='down' />
        <input type='radio' name='control' id='temp' />
        <input type='radio' name='control' id='lights' />
        <input type='radio' name='control' id='media' />
        <input type='radio' name='control' id='open' defaultChecked='' />
        <div className='floor'>
          <label htmlFor='up'>Piano Superiore</label>
          <label htmlFor='down'> Piano Inferiore</label>
        </div>
        <div className='control'>
          <label htmlFor='temp'> Temperatura</label>
          <label htmlFor='lights'> Luci</label>
          <label htmlFor='media'> Audio</label>
          <label htmlFor='open'> Apri</label>
        </div>
        {/* actual floorplan */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          style={{ display: "block", margin: "auto" }}
          viewBox='-5 -5 85 85'
        >
          <defs>
            <path
              id='music'
              strokeLinecap='butt'
              className='icon'
              d='M -2,0 0,-0.4 M -2,2 c 0,1 -3,0 0,0 L -2,-1 0,-1.4 0,1 c -3,0 0,1 0,0'
            />
            <path
              id='opened'
              className='icon'
              d='m -2.9,1.6 2.88,-3.1 M 0.11,0.1 C 0.1,0.94 -0.57,1.6 -1.4,1.6 M -2.9,0.1 c 0,-0.83 0.7,-1.5 1.5,-1.5'
            />
            <circle id='badge' r='4.2' cx='-1.3' cy='0.5' />
            <circle id='small-badge' r='2.5' cx='-1.3' cy='0.25' opacity='.5' />
            <path
              id='light'
              x={0}
              y={0}
              className='icon'
              d='m -2.2,3 c 0.6,0.3 0.9,0.3 1.4,0 M -2.2,2.1 c 0.6,0.3 0.9,0.3 1.4,0 m 0.14,-0.9 c 0,-0.47 0.27,-0.54 0.54,-0.94 0.6,-0.92 0,-2.46 -1.38,-2.46 -1.4,0 -2,1.53 -1.4,2.46 0.3,0.41 0.6,0.47 0.6,0.94'
            />
            <rect
              id='label-bg'
              fill='currentcolor'
              opacity='.95'
              className='label'
              x={0}
              y='-4.5'
              width={10}
              height={6}
              rx='1.5'
              ry='1.5'
            />
          </defs>
          <g className='upstairs'>
            <g className='media'>
              {/* landing bookshelf  */}
              <g transform='translate( 49.5 44)'>
                {" "}
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#music' />
              </g>
              {/* landing toybox */}{" "}
              <g transform='translate( 45.2 51.25)'>
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#music' />
              </g>
              {/* bathroom */}{" "}
              <g transform='translate( 52.75 32)'>
                {" "}
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#music' />
              </g>
              {/* ensuite */}{" "}
              <g transform='translate( 68.5 40)'>
                {" "}
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#music' />
              </g>
              {/* bedroom */}{" "}
              <g transform='translate( 59 62)'>
                {" "}
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#music' />
              </g>
            </g>
            <g className='lights'>
              {/* kids room */}{" "}
              <g transform='translate( 34.5 49)'>
                {" "}
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#light' />
              </g>
              {/* landing  */}{" "}
              <g transform='translate( 47 49)'>
                {" "}
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#light' />
              </g>
              {/* olives room */}
              <g transform='translate( 40 33)'>
                {" "}
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#light' />
              </g>
              {/* bathroom */}{" "}
              <g transform='translate( 52.75 32)'>
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#light' />
              </g>
              {/* ensuite */}{" "}
              <g transform='translate( 63.5 32)'>
                {" "}
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#light' />
              </g>
              {/* bedroom */}{" "}
              <g transform='translate( 59 62)'>
                {" "}
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#light' />
              </g>
            </g>
            <g className='open'>
              {/* olive window */}{" "}
              <g transform='translate( 40 26.5)'>
                {" "}
                <use className='badge' xlinkHref='#small-badge' />{" "}
                <use xlinkHref='#opened' />
              </g>
              {/* bathroom window */}
              <g transform='translate( 53 26.5)'>
                {" "}
                <use className='badge' xlinkHref='#small-badge' />{" "}
                <use xlinkHref='#opened' />
              </g>
              {/* ensuite window */}{" "}
              <g transform='translate( 70 30)'>
                {" "}
                <use className='badge' xlinkHref='#small-badge' />{" "}
                <use xlinkHref='#opened' />
              </g>
              {/* bed hob andy */}{" "}
              <g transform='translate( 63  70)'>
                {" "}
                <use className='badge' xlinkHref='#small-badge' />{" "}
                <use xlinkHref='#opened' />
              </g>
              {/* bed hob brenda */}{" "}
              <g transform='translate( 55 70)'>
                {" "}
                <use className='badge' xlinkHref='#small-badge' />{" "}
                <use xlinkHref='#opened' />
              </g>
              {/* bedroom window */}{" "}
              <g transform='translate( 51 63)'>
                {" "}
                <use className='badge' xlinkHref='#small-badge' />{" "}
                <use xlinkHref='#opened' />
              </g>
              {/* landing window */}{" "}
              <g transform='translate( 46 56)'>
                {" "}
                <use className='badge' xlinkHref='#small-badge' />{" "}
                <use xlinkHref='#opened' />
              </g>
              {/* kids window */}{" "}
              <g transform='translate( 35 56)'>
                {" "}
                <use className='badge' xlinkHref='#small-badge' />{" "}
                <use xlinkHref='#opened' />
              </g>
            </g>
            <g className='temp'>
              {/*Bedroom temp */}
              <g transform='translate( 53 63)'>
                {" "}
                <use xlinkHref='#label-bg' />
                <text x={5} y='-.5'>
                  27c
                </text>
              </g>
              {/*Olive temp */}
              <g transform='translate( 34 35)'>
                {" "}
                <use xlinkHref='#label-bg' />
                <text x={5} y='-.5'>
                  22c
                </text>
              </g>
              {/*Kids temp */}
              <g transform='translate( 28 52)'>
                {" "}
                <use xlinkHref='#label-bg' />
                <text x={5} y='-.5'>
                  22c
                </text>
              </g>
            </g>
            <g className='base'>
              <g className='roof'>
                <path
                  fillOpacity='.2'
                  d='M42.29-.027h29.2l-14.6 8.359zM30.39 24.5h11.9v2.16h-10zm1.9 4.51v11.12h-5.8v3.43H13.71L1.66 29.06h11.13v4.64l6.57 3.95 6.53-3.95v-4.64zm0 0'
                />
                <path
                  fillOpacity='.3'
                  d='M30.39 24.5l1.9 2.16v2.35h-1.9zM1.66 29.06l11.97 14.28-4.25 5.78-7.72 3.2zm36.23 26.89h11.7l-11.7 3.26zm4.4-55.977l14.6 8.359V26.66h-14.6zM12.81 33.68l6.57 3.96V24.37h-6.57v12.96zm34.58 39.05l2.2-2.67v-6.27h-2.2zm0 0'
                />
                <path
                  fillOpacity='.5'
                  d='M47.39 72.73h24.1l-2.6-2.67h-19.3zm2.2-16.78v7.84h-8.2zm-23.1-12.38v12.68l11.4-.29.1 2.25H7.42l1.96-9.08 4.25-5.79zm0 0'
                />
                <path
                  fillOpacity='.6'
                  d='M19.38 37.64l6.61-3.96v3.65-12.96h-6.61zm52.11 35.09V48.91h-2.6v21.15zM56.89 8.332l14.6-8.36V34.48h-2.6v-7.82h-12zm0 0'
                />
                <path
                  fillOpacity='.4'
                  d='M9.38 49.12L7.42 58.2l-5.76-5.88zm40.21 6.83l-8.2 7.84-3.5-4.58zm0 0'
                />
              </g>
              <path
                className='detail'
                d='M66.39 34.45l-3.8 4.35m-13.8-12.35v10.26m20-2.26v13.77m-26.4-10.53h-10.2m33.7 18.69v10.26m-9.4-37.62h-7.7m13.3 15h-4m-1.3-4.32v8.58m-1.3-8.58v8.58m-1.2-8.58v8.58m-1.2-8.5v4.3m9-4.38l-2.8 4.32 2.7 4.26m-4-8.58v8.58m0-8.58v8.58m1.3-8.58v8.58m-5-8.58v8.58m1.2-8.58v8.58m1.3-8.58v8.58'
              />
              <path
                className='wall'
                d='M52.59 50.82h3.9v-2.57m1.7-4.27h-5.6v4.27m9.5-8.55v8.55h-9.5v4.71l-.8.85m-1.3 1.28l-.9.86m-17.3-15.82V26.66h36.6v7.82h2.5v14.2h-2.5v21.38h-19.3V55.95h-23.1V40.13h9.9m6 0h2.6m11.9-13.38V39.7m-11.1-12.95v7.99l2.6 2.4m2.5 2.09l.5.47h10.6l.8-.81m3.7-4.41h2.4m-42.4 8.22h15.9l3-3m2.2-2l.6-.74m-18.4 3.22v2.52m36.1 27.36v-3.42m0-10.26v-5.99l2.1-1.71h.9m-29.1-5.98v.85m0 3v9.4'
              />
            </g>
          </g>
          <g className='downstairs'>
            <g className='base'>
              <path
                className='wall'
                d='M15.05 27.63v-1.36h1.62v1.36zm8.71 0v-1.36h-1.62v1.36zm21.98 6.3h1.71v-1.07m0-5.13v-1.07H32.23v7.14m11.8-7.18v-4.1m0-17.188V1.527h24.8v1.625m0 5.047V34.48h2.56v13.77H52.58m-6.84-21.59v7.32l-.42.6m23.51 13.67v21.81H49.64m-6.08-33.05l-.43.64H32.36m-8.21-3.85h8.08v6.33m-2.18 0h5.9v-2.48m32.88-10.99H53.01v1.41m0 4.88v2.35H56v-8.64M22.79 37.52v2.61h3.75m36.73-.43H53.01v4.28h5.13m13.25-4.28h-5.55m-3.81 0v8.55m-15.86-3.84v4.27h1.28l1.28-1.71v-6.84h-2.56v.43m3.47 13.68v.48m0 .48v.48m0 .48v.49m0 .48v.48m0 .48v.48m0 .48v.48m0 .48v.49m0 .48v.95M14.58 30.98v5M8.25 55.95v18.28h41.39v-12.3h-7.19l-2.74-3.41v-2.57H8.25l-4.703-4.7V30.98H16.37m5.64 0h2.14v2.82l-.1 3.77-3.84-.1v2.61'
              />
              <path
                className='detail'
                d='M49.24 54.13V52.1l3.34-3.34m1.44 0l-3.75 3.88v1.5M29.61 69.8v-2.24h2.25v-2.11h-4.35v4.35h2.1zm5.06-2.56v2.24h-2.25v2.11h4.35v-4.35h-2.1zM48.02 27.44h4.45m0-.89h-4.45m4.34 13.31H49.3m-.63 8.11h3.71m-16.45-7.84H42v-2.48M8.324 56.18V75m2.326-18.82V75m2.33-18.82V75m2.32-18.82V75m2.4-18.82V75m2.32-18.82V75m2.33-18.82V75M66 74.02H49.8m7.5-4.12v4.12m-1.28-4.12v4.12m-1.2-4.12v4.12m-1.27-4.12v4.12m-1.2-4.12v4.12m-1.28-4.12v4.12M66 69.9v4.12m-1.27-4.12v4.12m-1.21-4.12v4.12m-1.27-4.12v4.12m-1.2-4.12v4.12m-1.28-4.12v4.12M58.5 69.9v4.12M68.85 2.641V8.25M31.73 36.07H25.8v4.06m43.05-5.63v5.18m2.1 2.17h-4.72v-2.17m-13.21-11.7v5.17m-5.54-5.55v5.17M44.02 5.203V22.43M16.5 30.98h5.62m37.13 8.7v8.62m-1.27-8.62v8.62m4.04-8.62l-2.77 4.34 2.7 4.28m-8.93-4.35v4.35m1.21-8.62v8.62m1.27-8.62v8.62m1.27-8.62v8.62m5.25-4.28h-3.89M23.7 49.95v-3.82h17.1v3.82z'
              />
            </g>
            <g className='open'>
              {/* dining front window */}
              <g transform='translate( 10.5 31)'>
                {" "}
                <use className='badge' xlinkHref='#small-badge' />{" "}
                <use xlinkHref='#opened' />
              </g>
              {/* dining side window */}
              <g transform='translate( 5 42)'>
                {" "}
                <use className='badge' xlinkHref='#small-badge' />{" "}
                <use xlinkHref='#opened' />
              </g>
              {/* dining back window */}
              <g transform='translate( 15 56)'>
                {" "}
                <use className='badge' xlinkHref='#small-badge' />{" "}
                <use xlinkHref='#opened' />
              </g>
              {/* kitchen back window */}
              <g transform='translate( 25 56)'>
                {" "}
                <use className='badge' xlinkHref='#small-badge' />{" "}
                <use xlinkHref='#opened' />
              </g>
              {/* kitchen door  */}
              <g transform='translate( 35 56)'>
                {" "}
                <use className='badge' xlinkHref='#small-badge' />{" "}
                <use xlinkHref='#opened' />
              </g>
              {/* lounge door  */}
              <g transform='translate( 51 66)'>
                {" "}
                <use className='badge' xlinkHref='#small-badge' />{" "}
                <use xlinkHref='#opened' />
              </g>
              {/* lounge window  */}
              <g transform='translate( 60 70)'>
                {" "}
                <use className='badge' xlinkHref='#small-badge' />{" "}
                <use xlinkHref='#opened' />
              </g>
              {/* office front window  */}
              <g transform='translate( 40.5 26.5)'>
                {" "}
                <use className='badge' xlinkHref='#small-badge' />{" "}
                <use xlinkHref='#opened' />
              </g>
              {/* office side window  */}
              <g transform='translate( 33.5 31)'>
                {" "}
                <use className='badge' xlinkHref='#small-badge' />{" "}
                <use xlinkHref='#opened' />
              </g>
              {/* garage window  */}
              <g transform='translate( 70 18)'>
                {" "}
                <use className='badge' xlinkHref='#small-badge' />{" "}
                <use xlinkHref='#opened' />
              </g>
              {/* garage back door  */}
              <g transform='translate( 70 6)'>
                {" "}
                <use className='badge' xlinkHref='#small-badge' />{" "}
                <use xlinkHref='#opened' />
              </g>
              {/* garage main door  */}
              <g transform='translate( 45.5 14)'>
                {" "}
                <use className='badge' xlinkHref='#small-badge' />{" "}
                <use xlinkHref='#opened' />
              </g>
              {/* guest window  */}
              <g transform='translate( 70 30)'>
                {" "}
                <use className='badge' xlinkHref='#small-badge' />{" "}
                <use xlinkHref='#opened' />
              </g>
              {/* guest ensuite window  */}
              <g transform='translate( 73  44)'>
                {" "}
                <use className='badge' xlinkHref='#small-badge' />{" "}
                <use xlinkHref='#opened' />
              </g>
            </g>
            <g className='lights'>
              {/* dining room */}
              <g transform='translate( 15 45)'>
                {" "}
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#light' />
              </g>
              {/* kitchen room */}
              <g transform='translate( 34 47)'>
                {" "}
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#light' />
              </g>
              {/* lounge room */}
              <g transform='translate( 60 60)'>
                {" "}
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#light' />
              </g>
              {/* office room */}
              <g transform='translate( 40.5 31.75)'>
                {" "}
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#light' />
              </g>
              {/* guest room */}
              <g transform='translate( 64 31.75)'>
                {" "}
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#light' />
              </g>
            </g>
            <g className='media'>
              {/* dining room */}
              <g transform='translate( 10 45)'>
                {" "}
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#music' />
              </g>
              {/* kitchen room */}
              <g transform='translate( 28 49)'>
                {" "}
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#music' />
              </g>
              {/* pantry room */}
              <g transform='translate( 29.5 36.5)'>
                {" "}
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#music' />
              </g>
              {/* kitchen nook */}
              <g transform='translate( 46 56)'>
                {" "}
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#music' />
              </g>
              {/* lounge speaker */}
              <g transform='translate( 66 65.5)'>
                {" "}
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#music' />
              </g>
              {/* lounge hub */}
              <g transform='translate( 66 52)'>
                {" "}
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#music' />
              </g>
              {/* lounge  */}
              <g transform='translate( 66 59)'>
                {" "}
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#music' />
              </g>
              {/* office room */}
              <g transform='translate( 40.5 31.75)'>
                {" "}
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#music' />
              </g>
              {/* guest room */}
              <g transform='translate( 64 31.75)'>
                {" "}
                <use className='badge' xlinkHref='#badge' />{" "}
                <use xlinkHref='#music' />
              </g>
            </g>
            <g className='temp'>
              {/*Garage temp */}
              <g transform='translate( 51.5 16)'>
                {" "}
                <use xlinkHref='#label-bg' />
                <text x={5} y='-.5'>
                  27c
                </text>
              </g>
              {/*Fridge temp */}
              <g transform='translate( 40 45)'>
                {" "}
                <use xlinkHref='#label-bg' />
                <text x={5} y='-.5'>
                  -18c
                </text>
              </g>
              {/*office temp */}
              <g transform='translate( 34 33.5)'>
                {" "}
                <use xlinkHref='#label-bg' />
                <text x={5} y='-.5'>
                  22c
                </text>
              </g>
              {/*Guest temp  */}
              <g transform='translate( 57.5 33.5)'>
                {" "}
                <use xlinkHref='#label-bg' />
                <text x={5} y='-.5'>
                  18c
                </text>
              </g>
              {/*Kitchen temp */}
              <g transform='translate( 16 48)'>
                {" "}
                <use xlinkHref='#label-bg' />
                <text x={5} y='-.5'>
                  25c
                </text>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Home;
