### Using AMCharts Covid Map and replacing their data with my own
Original demo from AMCharts:  https://www.amcharts.com/demos/corona-virus-animated-dashboard/

Line 11:  My own dummy data

Line 160:  First Chart: Map

Line 794:  Second Chart: Line + Bar (bottom of page)

Line 1378:  Third Chart: Toggable Table (right of page)

---


### Problem 1:  
These ‘buttons’ are currently hard-coded.  They show the Fund Type and total amount of each by looking at data in file ‘investors per country’  <script src="./InvestorsPerCountry.js"></script>
![image4](https://user-images.githubusercontent.com/86551196/123543705-c56f7d00-d747-11eb-8e90-f486186c686e.png)

The creation of these buttons should be automated and reusable.

Automated: A function that will look through the investors per country data and for each Fund Type, a new button should be created with the title, number and a unique color in the circle (colour only shows when the button is clicked to be active).

Reusable:  If I want to use the map for any other kind of data in future, I should be able to just change the data source (investors) with something else (e.g. farms per country).


---


### Problem 2:  
I want to remove data type ‘ACTIVE’ from the map (or replace it with ‘Total Companies’).   In the original AMChart, active means the ‘total number of active corona cases in that country or the world).  

When I hover over a country, a tooltip appears and it shows the same information that is in the buttons.  I’d like to remove 'active’ completely so there is no Button or Tooltip for it.

![image2](https://user-images.githubusercontent.com/86551196/123543695-ba1c5180-d747-11eb-8503-337375a077be.png)
![image6](https://user-images.githubusercontent.com/86551196/123543714-cb655e00-d747-11eb-894a-53cf31dacf7a.png)

Currently there are many instances of “active”, isActive, activeColor etc.  I keep breaking the whole map by removing or replacing them. 


---


### Problem 3:  
When changing data type to ‘Sovereign Wealth Fund’ by clicking on the button, the green bubble starts large and becomes small.  I want it to start small like the other data does.

Incorrect behaviour:  Green = Sovereign Wealth Fund… don’t like the large bubbles
![image3](https://user-images.githubusercontent.com/86551196/123543700-bf799c00-d747-11eb-80b2-af10874c5b7b.gif)

Correct behaviour:  When I switch from Endowment to Sovereign, the green bubbles don’t start large… this is how it should always be (small to large)
![image5](https://user-images.githubusercontent.com/86551196/123543708-c86a6d80-d747-11eb-8eec-d56abda17e70.gif)


---


### Problem 4:  
Is it possible to combine these two data objects into one but not lose functionality?
![image1](https://user-images.githubusercontent.com/86551196/123543690-b7216100-d747-11eb-8ad1-1baef2393403.png)
