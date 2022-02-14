export async function getLinkSave(key) {
    const myLinks = await localStorage.getItem(key);

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

export async function saveLink(key, newLink) {
    let linksStored = await getLinkSave(key);

    const hasLink = linksStored.some((link) => link.id === newLink.id);

    if (hasLink) {
        console.log('Link existente');
        return;
    }

    linksStored.push(newLink);

    await localStorage.setItem(key, JSON.stringify(linksStored));
    console.log('Link salvo com sucesso');
}
