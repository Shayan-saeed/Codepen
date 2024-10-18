import React from 'react'

interface ResultProps {
    srcCode: string;
}

const Result = ({ srcCode }: ResultProps) => {
    return (
        <div>
            <div className="shadow mt-4">
                <iframe
                    className="w-full h-60 rounded-md text-white"
                    srcDoc={srcCode}
                    title="output"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%"
                >
                </iframe>
            </div>
        </div>
    )
}

export default Result