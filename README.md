# MusicGraph
## Abstract -

## 1.Data Collection-<br />
<p> All the data resides in directory Data which includes - <br/>
  <ul>
    <li>Artist.csv - Data about music artists from different countries.</li>
    <li>spotify.csv - Top trending songs on spotify.</li>
    <li>GrammySongs.csv - Grammy Award winning songs.</li>
    <li>GrammyAlbums.csv - Grammy Award winning albums.</li>
  </ul>
</p>

## 2.Data Uplifting -
<p> R2RML mappings in the folder Data/mappings are used to map the the data from the above csv into RDF. The r2rml engine used here is implemented by <a href="https://github.com/chrdebru/r2rml">chrdebru</a>. The shell script file commands.sh in Data folder will run the jar using the configured properties to generate RDF triples which then can be loaded into a standard triplestore. The resultant triples can be imported through GraphDB workbench by uploading the files or tools like GraphDB preload. </p>
