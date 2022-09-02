# libraries 
from bs4 import BeautifulSoup

# HTML source (alphabetized, each line is a new letter of the alphabet.)
html_doc = """<div class="paragraph">
        <a href="https://www.accessnetworks.com/" target="_blank">Access Networks</a><br><a href="https://www.arcam.co.uk/our-products.htm" target="_blank">Arcam</a><br><a href="https://www.artnovion.com/" target="_blank">Artnovion Acoustics</a><br><a href="https://www.symetrix.co/partners/ashly/" target="_blank">Ashly</a><br><a href="https://www.asisecuritynow.com/" target="_blank">ASI Security Systems</a><br><a href="https://www.acinfinity.com/" target="_blank">AC Infinity</a><br><a href="https://www.anthemav.com/" target="_blank">Anthem</a><br><a href="http://araknisnetworks.com/" target="_blank">Araknis Networks</a><br><a href="http://www.atlona.com/" target="_blank">Atlona</a><br><a href="https://www.atlasied.com/"target="_blank">Atlas IED</a><br><a href="http://www.audiocontrol.com/index.aspx">Audio Control</a><br><a href="http://www.audio-technica.com/cms/site/c35da94027e94819/index.html">AudioTechnica</a><br><a href="http://www.auralex.com/">Auralex</a><br>
        <a href="https://www.bluesound.com/"target="_blank">Bluesound</a><br><a href="http://www.bose.com/">Bose</a><br><a href="http://www.bostonacoustics.com/US/Pages/Home.aspx" target="_blank">Boston Acoustics</a><br>
        <a href="http://cambridgesound.com/qtpro-sound-masking/?gclid=CjwKCAjw47bLBRBkEiwABh-PkTRrtYiEMUrUrB9gtPJuceY2MUMenOSxJmR3gO-d_aBto1kCwIVkBxoCeTkQAvD_BwE" target="_blank">Cambridge Sound Masking</a><br><a href="http://www.chiefmfg.com/">Chief</a><br><a href="http://www.contacta.co.uk/products#largearea" target="_blank">Contacta Hearing Loops</a><br><a href="https://www.classeaudio.com/" target="_blank">Classe Audio</a><br><a href="http://www.control4.com/">Control 4</a><br><a href="https://www.crownaudio.com/en-US" target="_blank">Crown</a><br>
        <a href="http://www.da-lite.com/">Da-Lite</a><br><a href="https://www.danleysoundlabs.com/" target="_blank">Danley Sound Labs</a><br><a href="http://www.dbxpro.com/">DBX Pro</a><br><a href="https://www.definitivetechnology.com/" target="_blank">Definitive Technology</a><br><a href="https://usa.denon.com/us/home" target="_blank">Denon + HEOS</a><br><a href="http://www.digitalprojection.com/">Digital Projection</a><br><ahref="https://www.doorbird.com/" target="_blank">DoorBird</a><br><a href="http://www.earthquakesound.com/" target="_blank">Earthquake</a><br><a href="https://epson.com/projectors-and-displays" target="_blank">Epson&nbsp;Projectors</a><br>
        <a href="https://www.furutech.com/products/" target="_blank">Furutech</a><br>
        <a href="https://www.hegel.com/en/" target="_blank">Hegel Music Systems</a><br>
        <a href="https://iportproducts.com/" target="_blank">iPort</a><br># <a href="https://isoacoustics.com/" target="_blank">IsoAcoustics</a><br>
        <a href="http://www.jblpro.com/www/home" target="_blank">JBL Pro</a><br><a href="https://www.jblsynthesis.com/" target="_blank">JBL Synthesis</a><br><a href="http://justaddpower.com/" target="_blank">Just Add Power</a><br><a href="http://procision.jvc.com/index.jsp" target="_blank">JVC Projectors</a><br>
        <a href="http://www.klipsch.com/" target="_blank">Klipsch</a><br><a href="https://www.klipsch.com/custom-install" target="_blank">Klipsch Custom Install</a><br><a href="https://www.klipsch.com/heritage-series-speakers" target="_blank">Klipsch Heritage </a><br><a href="http://www.klipsch.com/pro" target="_blank">Klipsch Pro</a><br><a href="https://klhaudio.com/" target="_blank">KLH Audio</a><br><a href="[https://www.kramerav.com/" target="_blank">Kramer AV</a><br><a href="http://www.kramerus.com/" target="_blank">Kramer Electronics</a><br>
        <a href="https://www.legrand.us/audiovisual" target="_blank">Legrand AV</a><br><a href="https://www.lexicon.com/products/" target="_blank">Lexicon</a><br><a href="http://www.lge.com/us/index.jsp" target="_blank">LG</a><br><a href="http://labgruppen.com/" target="_blank">Lab Gruppen</a><br><a href="https://leaprofessional.com/" target="_blank">Lea Professional</a><br><a href="http://www.lutron.com/" target="_blank">Lutron</a><br><a href="https://www.lutron.com/en-US/Products/Pages/WholeHomeSystems/Homeworks/Overview.aspx" target="_blank">Lutron HomeWorks</a><br><a href="https://www.lutron.com/en-US/Residential-Commercial-Solutions/Pages/Residential-Solutions/ShadingSolutions.aspx" target="_blank">Lutron Shades</a><br>
        <a href="http://www.us.marantz.com/us/pages/home.aspx" target="_blank">Marantz</a><br><a href="http://www.marklevinson.com/" target="_blank">Mark Levinson</a><br><a href="https://www.mantelmount.com/?gclid=CjwKCAjw_dTMBRBHEiwApIzn_ESKeM39q6CdUXUEUnce3b--eEU-D0gisymxaYXFILV0PeEON0UaNxoCFS4QAvD_BwE" target="_blank">MantleMount</a><br><a href="http://www.martinlogan.com/" target="_blank">Martin Logan</a><br><a href="http://www.monitoraudiousa.com/" target="_blank">Monitor Audio</a><br>
        <a href="https://www.pangeaaudio.com/" target="_blank">Pangea</a><br><a href="http://www.parasound.com/" target="_blank">Parasound</a><br><a href="https://www.peachtreeaudio.com/" target="_blank">Peachtree Audio</a><br><a href="https://www.powersoft.com/en/" target="_blank">Powersoft</a><br><a href="https://www.presonus.com/" target="_blank">PreSonus<br></a><a href="https://www.primaluna-usa.com/" target="_blank">PrimaLuna</a><br><a href="http://www.tvlift.com/">Nexus</a><br><a href="http://www.nuvotechnologies.com/" target="_blank">NuVo</a><br><a href="http://www.omnimount.com/consumer/Default.aspx" target="_blank">Omnimount</a><br><a href="https://www.pakedge.com/">Pakedge Networks</a><br><a href="http://www.panasonic.com/" target="_blank">Panasonic</a><br>
        <a href="https://www.qsc.com/" target="_blank">QSC</a><br><a href="https://www.qsc.com/products-solutions/q-sys/" target="_blank">Q-SYS Control</a><br>
        <a href="https://www.rdlnet.com/index.php?language=2" target="_blank">Radio Design Labs</a><br><a href="https://rel.net/" target="_blank">REL</a><br><a href="http://www.revelspeakers.com/" target="_blank">Revel</a><br><a href="https://ring.com/" target="_blank">Ring</a><br>
        <a href="http://www.salamanderdesigns.com/" target="_blank">Salamander Designs</a><br><a href="http://www.samsung.com/us/consumer/index.html" target="_blank">Samsung</a><br><a href="http://www.sanus.com/us/en/" target="_blank">Sanus</a><br><a href="http://www.screeninnovations.com/" target="_blank">Screen Innovations (SI)</a><br><a href="https://www.seura.com/" target="_blank">Seura</a><br>
        <a href="http://www.schlage.com/" target="_blank">Schlage</a><br><a href="http://www.shure.com/americas" target="_blank">Shure</a><br><a href="http://www.sonos.com/en-us/home" target="_blank">Sonos</a><br><a href="http://www.sony.com/index.php">Sony<br></a><a href="http://www.sonypremiumhome.com/receivers/" target="_blank">Sony ES</a><br><a href="https://pro.sony/ue_US/products/professional-displays/product-line-up" target="_blank">Sony Professional Displays</a><br><a href="http://www.sonypremiumhome.com/projectors/" target="_blank">Sony Projectors</a><br><a href="http://www.stewartfilmscreen.com/" target="_blank">Stewart Filmscreens</a><br><a href="http://www.sunbritetv.com/" target="_blank">SunBrite TV</a><br><a href="http://espsurgex.com/surgex/" target="_blank">Surge X</a><br><a href="https://www.symetrix.co/" target="_blank">Symmetrix</a><br>
        <a href="http://www.tdgaudio.com/" target="_blank">TDG Audio</a><br><a href="http://www.tannoy.com/" target="_blank">Tannoy</a><br><a href="https://www.tlnetworx.com/" target="_blank">Techlogix Networx</a><br><a href="http://www.triadspeakers.com/" target="_blank">Triad Speakers</a><br><a href="http://www.tributariescable.com/">Tributaries</a><br>
        <a href="http://www.universalremote.com/" target="_blank">Universal Control (URC Remote)</a><br>
        <a href="https://www.vincent-tac.de/en/home.html" target="_blank">Vincent Audio</a><br>
        <a href="http://www.xantech.com/" target="_blank">Xantech</a><br>
        <a href="http://www.yaleresidential.com/en/yale/yaleresidential-com/Real-Living/" target="_blank">Yale Real Living</a><br><a href="https://usa.yamaha.com/products/audio_visual/index.html" target="_blank">Yamaha</a>
        </div>"""

# make soup to work with 
soup = BeautifulSoup(html_doc, 'html.parser')

# create some frames to use in the functions 
counter = 0
links = []

# template for each data item 
template = {
    'url': "",
    'lable': "",
    'char':"BND",
    'id': 0,
    'finalid': "",
    'imageURL': "../assets/icons/"
}

# # create the original array of items 
for link in soup.find_all('a'):
    template['id'] = counter + 1
    counter = counter + 1
    
    # dummy-proofs making some bigger boxes for longer brand names. add and "|| [long name]" to the end of this to make other accomodations. 
    if link.string == "Universal Control (URC Remote)":
        template['finalid'] = "big"
    else:
        template['finalid'] = template['char'] + str(template['id']) 

    template['lable'] = link.string
    template['url'] = link.get('href')
    
    links.append(template)
    
    template = {
        'url': "",
        'lable': "",
        'char':"BND",
        'id': counter,
        'finalid': "",
    }

# clean up the array from the data that we don't need 
for item in links:
    idx = 0
    links[idx]
    del item['id']
    del item['char']
    idx = idx + 1

print(links)


# template for adding a new brand to the list | you will need to add this to the HTML brick above and then run the parser in a terminal to write a new data file for the brands page. 
# <a href="[--url--]" target="_blank">[--brand name--]</a><br>


