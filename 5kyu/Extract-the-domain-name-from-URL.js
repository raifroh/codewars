// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

//parameters = string
//return string
//example see left


const domainName = url => {
    let noHttp = url.replace('http://', '')
    let noHttps = noHttp.replace('https://','')
    let noDotCom = noHttps.replace('.com', '')
    let noWww = noDotCom.replace('www.', '')
    let noPeriod = noWww.split('.')[0]
    let noSlashes = noPeriod.split('/')[0]
    return noSlashes
  }