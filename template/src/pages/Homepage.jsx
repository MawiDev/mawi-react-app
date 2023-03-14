import React from "react"
export default function Homepage() {
    return(
        <div className="py-24">
            <div className="flex flex-col justify-center items-center gap-6">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-mono font-light underline underline-offset-4">Hello World!</h1>
                <div className="flex justify-center items-center gap-2">
                    <p className="text-md font-mono font-light">Template created by</p>
                    <a className="text-lg font-mono font-medium text-blue-500 underline flex items-center" href="https://github.com/MawiDev">
                        MawiDev
                        <img width={'35'} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt='github-logo'/>
                    </a>
                </div>
            </div>
        </div>
    )
}