import React from 'react'
import Markdown from 'markdown-to-jsx';

export default function MarkdownComponent(props) {
  return (
    <>
            <Markdown
                options={{
                    overrides: {
                        h1: {
                            props: {
                                className: 'text-5xl font-bold'
                            }
                        },
                        h2: {
                            props: {
                                className: 'text-4xl font-bold mt-4'
                            }
                        },
                        h3: {
                            props: {
                                className: 'text-3xl font-bold mt-4'
                            }
                        },
                        h4: {
                            props: {
                                className: 'text-2xl font-bold mt-4'
                            }
                        },
                        h5: {
                            props: {
                                className: 'text-xl font-bold mt-4'
                            }
                        },
                        p: {
                            props: {
                                className: 'sm:text-xl font-light whitespace-pre-line mt-4 leading-normal lg'
                            }
                        },
                        a: {
                            props: {
                                className: 'underline underline-offset-2 font-medium'
                            }
                        },
                        img: {
                            props: {
                                className: 'rounded-lg mt-4 responsive-img mx-auto'
                            }
                        },
                        strong: {
                            props: {
                                className: 'font-bold'
                            }
                        },
                        em: {
                            props: {
                                className: 'font-italic'
                            }
                        },
                        code: {
                            props: {
                                className: 'font-mono mt-4'
                            }
                        },
                        ul: {
                            props: {
                                className: 'list-disc list-inside mt-4 text-xl font-light'
                            }
                        },
                        li: {
                            props: {
                                className: 'mt-2'
                            }
                        },
                        blockquote: {
                            props: {
                                className: 'text-xl font-light mt-4 border-l-4 border-gray-300 pl-4'
                            }
                        }
                }
            }}>
                {props.text}
            </Markdown>
    </>
  )
}
