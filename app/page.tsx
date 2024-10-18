'use client'
import { useState, useCallback } from 'react'
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import Navbar from './components/Navbar';
import Result from './components/Result';
import CodeMirror from "@uiw/react-codemirror";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [html_edit, setHtml_Edit] = useState('<h1 id="heading1">👋 Hello world! </h1>');
  const [css_edit, setCss_Edit] = useState('body{ color: white; background: #f06d06; text-align: center; }');
  const [js_edit, setJs_Edit] = useState('document.getElementById("heading1").style.color = "white";');


  const onChangeHtml = useCallback((value: string) => {
    setHtml_Edit(value);
  }, []);


  const onChangeCss = useCallback((value: string) => {
    setCss_Edit(value);
  }, []);

  const onChangeJavaScript = useCallback((value: string) => {
    setJs_Edit(value);
  }, []);

  const srcCode = `
  <html>
      <body>${html_edit}</body>
      <style>${css_edit}</style>
      <script>${js_edit}</script>
  </html>
  `

  return (
    <div>
      <Navbar />
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 border-t border-b border-gray-700">
          <div className='bg-black border-r border-gray-600'>
            <div className="shadow" style={{ margin: "1rem" }}>
              <div className='flex items-center justify-center p-2 gap-2 bg-[#282c34] border-t-4 border-gray-600' style={{ width: "30%" }}>
                <FontAwesomeIcon icon={faHtml5} style={{ height: '24px', width: '28px' }} color="orange" />
                <h2 className="text-lg font-semibold text-white">
                  HTML
                </h2>
              </div>
              <CodeMirror
                className="editor text-md bg-[#282c34] p-2"
                value={html_edit}
                height="250px"
                theme="dark"
                extensions={[html()]}
                onChange={onChangeHtml}
              />
            </div>
          </div>
          <div className='bg-black border-r border-gray-600'>
            <div className="shadow" style={{ margin: "1rem" }}>
              <div className='flex items-center justify-center p-2 gap-2 bg-[#282c34] border-t-4 border-gray-600' style={{ width: "30%" }}>
                <FontAwesomeIcon icon={faCss3Alt} style={{ height: '24px', width: '28px' }} color="blue" />
                <h2 className="text-lg font-semibold text-white">
                  CSS
                </h2>
              </div>
              <CodeMirror
                className="editor text-md bg-[#282c34] p-2"
                value={css_edit}
                height="250px"
                theme="dark"
                extensions={[css()]}
                onChange={onChangeCss}
              />
            </div>
          </div>
          <div className='bg-black border-r border-gray-600'>
            <div className="shadow" style={{ margin: "1rem" }}>
              <div className='flex items-center justify-center p-2 gap-2 bg-[#282c34] border-t-4 border-gray-600' style={{ width: "30%" }}>
                <FontAwesomeIcon icon={faCode} style={{ height: '24px', width: '28px' }} color="yellow" />
                <h2 className="text-lg font-semibold text-white">
                  JS
                </h2>
              </div>
              <CodeMirror
                className="editor text-md bg-[#282c34] p-2"
                value={js_edit}
                height="250px"
                theme="dark"
                extensions={[javascript()]}
                onChange={onChangeJavaScript}
              />
            </div>
          </div>
        </div>

        <Result
          srcCode={srcCode}
        />
      </div>
    </div >
  );
}
