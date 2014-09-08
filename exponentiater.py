#Visitacion, Stephanie R.
import json
import cgi

def make_exponentiater(power):
    return lambda(x): pow(x,power)

square = make_exponentiater(2)
cube = make_exponentiater(3)

def index( req, action, operand):
    action = cgi.escape(action)
	operand = cgi.escape(operand)
	if(action == 'compute_square')
	    response.append(square(operand))
	else
	    response.append(cube(operand))
	return json.dumps(response)


