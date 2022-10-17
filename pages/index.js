import React, {useState, useRef} from 'react'
import { IconBold, IconCamera, IconEye, IconHeading, IconItalic, IconLink, IconList, IconMarkdown, IconPencil, IconQuote } from '@tabler/icons';
import MarkdownComponent from '../components/utils/markdown';
import Link from 'next/link';
import ReactToPrint from 'react-to-print';
import Script from 'next/script';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

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
    <Head>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    </Head>
        <NextSeo
            title="Convert your markdown to beautiful PDF in seconds - mark2pdf"
            description="Convert your markdown to beautiful PDF in seconds! Just paste your markdown markup and we will convert it to a PDF file. "
            canonical="https://mark2pdf.dhairyashah.dev/"
            openGraph={{
                title: 'Convert your markdown to beautiful PDF in seconds - mark2pdf',
                description: 'Convert your markdown to beautiful PDF in seconds! Just paste your markdown markup and we will convert it to a PDF file.',
                url: 'https://mark2pdf.dhairyashah.dev/',
                site_name: 'mark2pdf',
            }}
            twitter={{
                handle: '@mark2pdf',
                site: '@mark2pdf',
                cardType: 'summary_large_image',
            }}
            additionalMetaTags={[
                {
                  property: 'keywords',
                  content: "markdown, pdf, markdown to pdf, markdown to pdf converter online, markdown guide"
                }
              ]}
        />
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
          <a href="https://www.dhairyashah.dev/twitter" target="_blank" rel="noopener noreferrer" >
          <div className="px-3 py-[7px] bg-white item border border-[#ccc] rounded-md hidden sm:flex items-center justify-center hover:shadow-md">
          <Image src="https://avatars.githubusercontent.com/dhairyathedev?s=30" alt="Dhairya Shah" className="rounded-full border-2 border-[#1DA1F2] p-[2px]" width={24} height={24}/>
          <div className="ml-2 flex items-start justify-center flex-col w-full"><h3 className="font-bold capitalize text-sm">By Dhairya Shah</h3><p className="text-[10px] font-medium flex items-center text-[#1DA1F2]">Follow on Twitter<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="ml-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></p></div>

          </div>
          </a>
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
        spellCheck="false" style={{"height": "1471px !important"}} value={markText} onChange={(e) => setMarkText(e.target.value)} placeholder="Paste the markdown..."/>
    </div>
    {/* Output */}
    <div ref={markdownRef} className={`max-w-screen-md mx-auto font-inter m-2 p-4 ${editorHidden ? "block" : "hidden"}`}>
            <MarkdownComponent text={markText ? markText: "Nothing to preview 🧐"} />
    </div>
</div>
    </>
  )
}
