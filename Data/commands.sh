echo "Mapping artist and coreesponding trending songs on spotify"
java -jar r2rml/r2rml.jar mappings/music-config.properties
echo "-----------------------------------"
echo "Mapping Grammy awards data"
java -jar r2rml/r2rml.jar mappings/grammy-awards-config.properties