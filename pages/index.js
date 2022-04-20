import React, {useState, useRef} from 'react'
import { IconBold, IconCamera, IconEye, IconHeading, IconItalic, IconLink, IconList, IconMarkdown, IconPencil, IconQuote } from '@tabler/icons';
import MarkdownComponent from '../components/utils/markdown';
import Link from 'next/link';
import ReactToPrint from 'react-to-print';

export default function New() {
    const [markText, setMarkText] = useState('');
    const [editorHidden, setEditorHidden] = useState(false);
    // set textarea ref
    const textareaRef = useRef(null);
    const markdownRef = useRef(null);
    const typeInTextarea = (newText, el = textareaRef.current) => {
        const [start, end] = [el.selectionStart, el.selectionEnd];
        el.setRangeText(newText, start, end, 'select');
    }
    const addHeading = (e) => {
        e.preventDefault();
        typeInTextarea(` # `);
    }
    const addBold = (e) => {
        e.preventDefault();
        typeInTextarea(` ** bold text **`);
    }
    const addItalic = (e) => {
        e.preventDefault();
        typeInTextarea(` * italic text *`);
    }
    const addLink = (e) => {
        e.preventDefault();
        typeInTextarea(` [link](https://google.com)`);
    }
    const addList = (e) => {
        e.preventDefault();
        typeInTextarea(` - list item`);
    }
    const addQuote = (e) => {
        e.preventDefault();
        typeInTextarea(` > quote`);
    }
    const addImage = (e) => {
        e.preventDefault();
        typeInTextarea(` ![alt text](https://picsum.photos/200/300)`);
    }

    const handlePrint = () => {
        return (
                <button className="text-xl flex flow-row font-light border border-green-500 text-green-500 rounded-full px-4 py-2 m-2 transition duration-500 hover:text-white ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                 >  
                    Save as PDF
                </button>
        )
    }
  return (
    <>
        <div className="max-w-screen-lg mx-auto font-inter m-2 p-4">
        <div className="flex justify-between">
        <div className="flex">
            <h1 className="text-5xl font-light font-indieFlower select-none">
                <Link href="/">
                    <a>
                        mark2pdf
                    </a>
                </Link>
            </h1>
        </div>
        <div className="flex flex-row items-center space-x-4">
            <div className={`${editorHidden ? "block" : "hidden"}`}>
                <ReactToPrint 
                    content={() => markdownRef.current}
                    trigger={handlePrint}
                />
            </div>
            <div className={`${!editorHidden ? "block" : "hidden"}`}>
              <button className="text-xl flex flow-row font-light border border-green-500 text-green-500 rounded-full px-4 py-2 m-2 transition duration-500 hover:text-white ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                  onClick={() => 
                    setEditorHidden(!editorHidden)
                  }>  
                      <IconEye className="mr-2" />
                      Preview
              </button>
            </div>

        </div>
    </div>

            <hr />

            {/* Toolbar */}
            <div className="flex justify-between mt-8 bg-bluish-gray p-3 rounded-md">
                <div className="flex flex-row items-center space-x-6">
                <div className="flex flex-row cursor-pointer" onClick={() => setEditorHidden(editorHidden ? !editorHidden : "")}>
                      <IconPencil /> &nbsp; 
                    <h1 className="text-lg font-bold select-none">
                        Write
                    </h1>
                </div>
                <div className="flex flex-row cursor-pointer" onClick={() => setEditorHidden(editorHidden === true ? "" : !editorHidden)}>
                    <IconEye /> &nbsp;
                    <h1 className="text-lg font-medium select-none">
                        Preview 
                    </h1>
                </div>
            </div>
            <div className="flex-row items-center space-x-4 hidden sm:flex">
                <div className="flex flex-row cursor-pointer" onClick={addHeading}>
                    <IconHeading /> 
                </div>
                <div className="flex flex-row cursor-pointer" onClick={addBold}>
                    <IconBold />
                </div>
                <div className="flex flex-row cursor-pointer" onClick={addItalic}>
                    <IconItalic />
                </div>
                <div className="flex flex-row cursor-pointer" onClick={addQuote}>
                    <IconQuote />
                </div>
                <div className="flex flex-row cursor-pointer" onClick={addLink}>
                    <IconLink />
                </div>
                <div className="flex flex-row cursor-pointer" onClick={addList}>
                    <IconList />
                </div>
                <div className="flex flex-row cursor-pointer" onClick={addImage}>
                    <IconCamera />
                </div>
                <div className="flex flex-row cursor-pointer">
                    <a href='https://daringfireball.net/projects/markdown/basics' target="_blank" rel="noopener noreferrer">
                        <IconMarkdown />
                    </a>
                </div>
            </div>
        </div>

        {/* Textarea */}
        <div className={`${editorHidden ? "hidden" : "block"}`}>    
        <textarea ref={textareaRef} className="w-full resize-none p-4 bg-transparent text-brand-black focus:outline-none text-xl leading-snug placeholder-brand-grey-500 py-12 min-h-screen focus:border-gray-50 focus:bg-white focus:ring-0 border-gray-50"
        spellCheck="false" style={{"height": "1471px !important;"}} value={markText} onChange={(e) => setMarkText(e.target.value)} placeholder="How was your day?..."/>
    </div>
    {/* Output */}
    <div ref={markdownRef} className={`max-w-screen-md mx-auto font-inter m-2 p-4 ${editorHidden ? "block" : "hidden"}`}>
            <MarkdownComponent text={markText ? markText: "Nothing to preview 🧐"} />
    </div>
</div>
    </>
  )
}
