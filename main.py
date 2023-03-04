from flask import Flask,render_template

app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'




  
#Index Page
@app.route("/")
def index():    
    return render_template('index.html')    




#Products details
@app.route("/shop/productdetails")
def productdetails():    
    return render_template('shop/productdetails.html')    

#Cart
@app.route("/shop/cart")
def cart():    
    return render_template('shop/cart.html')    

#login
@app.route("/shop/log")
def log():    
    return render_template('shop/log.html')    

#loginsup
@app.route("/shop/logsup")
def logsup():    
    return render_template('shop/logsup.html')    

#wishlist
@app.route("/shop/wishlist")
def wishlist():    
    return render_template('shop/wishlist.html')    

#Men
@app.route("/shop/productsmen")
def productsmen():    
    return render_template('shop/productsmen.html')    

#MenList
@app.route("/shop/productlistmen")
def productlistmen():    
    return render_template('shop/productlistmen.html')    

#ComingSoon
@app.route("/shop/soon")
def soon():    
    return render_template('shop/soon.html')    

#Checkout
@app.route("/shop/checkout")
def checkout():    
    return render_template('shop/checkout.html')  




if __name__ == "__main__":  
    app.run(debug=True)     
