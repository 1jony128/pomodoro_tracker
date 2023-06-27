
const render = (html: string) => {

    const element = document.createElement('div')

    element.innerHTML = html

    return element

}

export default render