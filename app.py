from flask import Flask, render_template, request, redirect, url_for
from flask_mail import Mail, Message

app = Flask(__name__)

# Configuración de Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'  # Cambia esto a tu servidor SMTP
app.config['MAIL_PORT'] = 587  # Cambia esto si es necesario
app.config['MAIL_USERNAME'] = 'nachoayerbe2003@gmail.com'
app.config['MAIL_PASSWORD'] = 'kgox xjjb byej zewn'
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False

mail = Mail(app)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/contact', methods=['POST'])
def contact():
    try:
        name = request.form['name']
        email = request.form['email']
        message = request.form['mensaje']
        
        # Crear el mensaje
        msg = Message('Nuevo mensaje de contacto', sender=email, recipients=['nachoayerbe2003@gmail.com'])
        msg.body = f'Nombre: {name}\nCorreo: {email}\nMensaje: {message}'
        
        # Enviar el mensaje
        mail.send(msg)
        
        
        # Redirigir al usuario después de enviar el formulario
        return "Formulario enviado correctamente", 200
    
    except Exception as e:
        return f"Error: {str(e)}", 500
    
if __name__ == '__main__':
    app.run(debug=True)
