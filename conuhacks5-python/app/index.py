from flask import Flask, request, jsonify
import json
import random

app = Flask(__name__)

"""
	GET /
	
	Returns: 
		payload A hello message.
"""
@app.route('/')
def default():
	return "Hello ConUHacks V!"

"""
	POST /api/emojify
	
	Parameters:
		body A list of names.
	
	Example:
		[string, string, ...]
	
	Returns: 
		payload An array of objects mapping the name to an emoji unicode.
	
	Example:
		[
			{
			  name: string,
			  emoji: string,
			},
			{
			  name: string,
			  emoji: string,
			},
			...
		]
		
"""
@app.route('/api/emojify', methods=["POST"])
def emojify():
	file = open("../emojis.json","r")
	values = json.loads(file.read())
	input = request.get_json()
	list=[]
	for p in input:
		ans = {}
		emoji = getHexa(values)
		ans['name']= p
		ans['emoji']= emoji
		list.append(ans)
	return jsonify(list)
"""
	Randomly select values from the given list of emojis.
	
	Parameters:
		values(list):  list of emoji's hexa-decimal data.
	
	Returns:
		hex_number(str): Random string value from the provided list.
"""	
def getHexa(values):
	random_number = random.randint(0,len(values))
	hex_number = values[random_number]
	return hex_number


if __name__ == '__main__':
	app.run(host='0.0.0.0', port=80)