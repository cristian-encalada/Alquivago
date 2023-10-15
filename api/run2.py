from api.factory import create_app

if __name__ == "__main__":
    app = create_app()

    # Configure the app with the MongoDB URI
    app.config['MONGO_URI'] = "MONGODB_URI_REDACTED"

    app.config['DEBUG'] = True
    app.run(host='0.0.0.0', port=5000)
