import math
import json
import pandas as pd
from pymongo import MongoClient
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

# Load JSON data from the file
with open('E:/Projects/hakathon/server/sales.json') as json_file:
    d = json.load(json_file)

# Create a DataFrame from the JSON data
df = pd.DataFrame(d)

# Define features (X) and target variable (y)
X = df[['January_sales', 'February_sales', 'March_sales', 'April_sales', 'May_sales', 'June_sales', 
        'July_sales', 'August_sales', 'September_sales', 'October_sales', 'November_sales', 'December_sales']]
y = df['total_price']

# Split the data into training and testing sets
X_predefined, X_new, y_predefined, y_new = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train the Linear Regression model
model = LinearRegression()
model.fit(X_predefined, y_predefined)

# Make predictions on predefined data
sales_predictions = model.predict(X_predefined)

# Format predictions as a dictionary
predictions_dict = {}
for i,month in enumerate(df.columns[3:15]):
    predictions_dict[f'prediction_{month}'] = int(math.sqrt(sales_predictions[i]))

# Output predictions as JSON
print(json.dumps(predictions_dict))

# MongoDB connection details
client = MongoClient('mongodb+srv://mernsample:Tug11uKXBjlER9HI@cluster0.jgbjwzi.mongodb.net/medical?retryWrites=true&w=majority&appName=Cluster0')
db = client['medical']  # Specify your database name here
collection = db['predictions']  # Specify your collection name here

# Insert predictions into MongoDB
collection.insert_one(predictions_dict)
