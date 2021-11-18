from flask import Flask
from SPARQLWrapper import SPARQLWrapper, JSON
app = Flask(__name__)
@app.route('/query/')
def queryData():
    sparql = SPARQLWrapper("http://localhost:7200/repositories/Music")
    sparql.setQuery("""
    PREFIX mo: <http://purl.org/ontology/mo/>
    PREFIX dc: <http://purl.org/dc/elements/1.1/>
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX foaf: <http://xmlns.com/foaf/0.1/>
    PREFIX music:<http://www.music.org/ontologies/music#>
    SELECT distinct	?Song ?Artist (str(?bpm) as ?BPM) ?Award (str(?year) as ?Year)
WHERE	{
	?award a music:GrammyAward;
			music:awardedFor ?Song;
			music:awardYear ?year;
			music:awardedTo ?artist;
			music:awardTitle ?Award.
	?artist foaf:name ?Artist.
	filter(?Award='Song Of The Year' && str(?year)='2016')
		{SELECT ?Song ?bpm
	where{
		?track a mo:Track;
			music:title ?Song;
			music:bpm ?bpm.
	}}
} limit 1
""")
    sparql.setReturnFormat(JSON)
    results = sparql.query().convert()
    return results
if __name__ == '__main__':
    app.run(host='localhost', port=5000)