<?php

class InvoiceItemTableSeeder extends Seeder {

	public function run()
	{
		DB::table('DEMO_Invoice_Item')->delete();

		InvoiceItem::create(array('description' => 'Steeleye Stout', 'category' => 'Beverages', 'unitCost' => 11.00,'quantity' => 1, 'total' =>11.00, 'invoice'=>1));
		InvoiceItem::create(array('description' => 'Ipoh Coffee', 'category' => 'Beverages','unitCost' => 12.00,'quantity' => 1, 'total' =>12.00, 'invoice'=>1));
		InvoiceItem::create(array('description' => 'Chai', 'category' => 'Beverages','unitCost' => 13.00,'quantity' => 1, 'total' =>13.00, 'invoice'=>1));
		InvoiceItem::create(array('description' => 'Chang', 'category' => 'Beverages','unitCost' => 14.00,'quantity' => 1, 'total' =>14.00, 'invoice'=>1));
		InvoiceItem::create(array('description' => 'Shichimi', 'category' => 'Condiments','unitCost' => 5,'quantity' => 1, 'total' =>5.00, 'invoice'=>1));
		InvoiceItem::create(array('description' => 'Pesto genovese', 'category' => 'Condiments','unitCost' => 7,'quantity' => 1, 'total' =>7.00, 'invoice'=>1));

		InvoiceItem::create(array('description' => 'Ipoh Coffee', 'category' => 'Beverages','unitCost' => 12.00,'quantity' => 1, 'total' =>12.00, 'invoice'=>2));
		InvoiceItem::create(array('description' => 'Shichimi', 'category' => 'Condiments','unitCost' => 5,'quantity' => 1, 'total' =>5.00, 'invoice'=>2));
		InvoiceItem::create(array('description' => 'Boston Crab Meat', 'category' => 'Seafood','unitCost' => 25,'quantity' => 1, 'total' =>25.00, 'invoice'=>2));
		InvoiceItem::create(array('description' => 'Chai', 'category' => 'Beverages','unitCost' => 13.00,'quantity' => 1, 'total' =>13.00, 'invoice'=>2));

		InvoiceItem::create(array('description' => 'Steeleye Stout', 'category' => 'Beverages', 'unitCost' => 11.00,'quantity' => 1, 'total' =>11.00, 'invoice'=>3));
		InvoiceItem::create(array('description' => 'Shichimi', 'category' => 'Condiments','unitCost' => 5,'quantity' => 1, 'total' =>5.00, 'invoice'=>3));
		InvoiceItem::create(array('description' => 'Pesto genovese', 'category' => 'Condiments','unitCost' => 7,'quantity' => 1, 'total' =>7.00, 'invoice'=>3));
		InvoiceItem::create(array('description' => 'Ikura', 'category' => 'Seafood','unitCost' => 34,'quantity' => 1, 'total' =>34.00, 'invoice'=>3));
		InvoiceItem::create(array('description' => 'Inlagd Sill', 'category' => 'Seafood','unitCost' => 18,'quantity' => 1, 'total' =>18.00, 'invoice'=>3));

		InvoiceItem::create(array('description' => 'Steeleye Stout', 'category' => 'Beverages', 'unitCost' => 11.00,'quantity' => 1, 'total' =>11.00, 'invoice'=>4));
		InvoiceItem::create(array('description' => 'Ipoh Coffee', 'category' => 'Beverages','unitCost' => 12.00,'quantity' => 1, 'total' =>12.00, 'invoice'=>4));
		InvoiceItem::create(array('description' => 'Boston Crab Meat', 'category' => 'Seafood','unitCost' => 25,'quantity' => 1, 'total' =>25.00, 'invoice'=>4));
		InvoiceItem::create(array('description' => 'Ikura', 'category' => 'Seafood','unitCost' => 34,'quantity' => 1, 'total' =>34.00, 'invoice'=>4));
		InvoiceItem::create(array('description' => 'Pesto genovese', 'category' => 'Condiments','unitCost' => 7,'quantity' => 1, 'total' =>7.00, 'invoice'=>4));

		InvoiceItem::create(array('description' => 'Inlagd Sill', 'category' => 'Seafood','unitCost' => 18,'quantity' => 1, 'total' =>18.00, 'invoice'=>5));
		InvoiceItem::create(array('description' => 'Ipoh Coffee', 'category' => 'Beverages','unitCost' => 12.00,'quantity' => 1, 'total' =>12.00, 'invoice'=>5));

		InvoiceItem::create(array('description' => 'Steeleye Stout', 'category' => 'Beverages', 'unitCost' => 11.00,'quantity' => 1, 'total' =>11.00, 'invoice'=>6));
		InvoiceItem::create(array('description' => 'Inlagd Sill', 'category' => 'Seafood','unitCost' => 18,'quantity' => 1, 'total' =>18.00, 'invoice'=>6));
		InvoiceItem::create(array('description' => 'Shichimi', 'category' => 'Condiments','unitCost' => 5,'quantity' => 1, 'total' =>5.00, 'invoice'=>6));

		InvoiceItem::create(array('description' => 'Chai', 'category' => 'Beverages','unitCost' => 13.00,'quantity' => 1, 'total' =>13.00, 'invoice'=>7));
		InvoiceItem::create(array('description' => 'Boston Crab Meat', 'category' => 'Seafood','unitCost' => 25,'quantity' => 1, 'total' =>25.00, 'invoice'=>7));
		InvoiceItem::create(array('description' => 'Ikura', 'category' => 'Seafood','unitCost' => 34,'quantity' => 1, 'total' =>34.00, 'invoice'=>7));
		InvoiceItem::create(array('description' => 'Chang', 'category' => 'Beverages','unitCost' => 14.00,'quantity' => 1, 'total' =>14.00, 'invoice'=>7));

		InvoiceItem::create(array('description' => 'Steeleye Stout', 'category' => 'Beverages', 'unitCost' => 11.00,'quantity' => 1, 'total' =>11.00, 'invoice'=>8));
		InvoiceItem::create(array('description' => 'Inlagd Sill', 'category' => 'Seafood','unitCost' => 18,'quantity' => 1, 'total' =>18.00, 'invoice'=>8));
		InvoiceItem::create(array('description' => 'Shichimi', 'category' => 'Condiments','unitCost' => 5,'quantity' => 1, 'total' =>5.00, 'invoice'=>8));
		InvoiceItem::create(array('description' => 'Pesto genovese', 'category' => 'Condiments','unitCost' => 7,'quantity' => 1, 'total' =>7.00, 'invoice'=>8));
		InvoiceItem::create(array('description' => 'Ipoh Coffee', 'category' => 'Beverages','unitCost' => 12.00,'quantity' => 1, 'total' =>12.00, 'invoice'=>8));

		InvoiceItem::create(array('description' => 'Chai', 'category' => 'Beverages','unitCost' => 13.00,'quantity' => 1, 'total' =>13.00, 'invoice'=>9));
		InvoiceItem::create(array('description' => 'Inlagd Sill', 'category' => 'Seafood','unitCost' => 18,'quantity' => 1, 'total' =>18.00, 'invoice'=>9));
		InvoiceItem::create(array('description' => 'Pesto genovese', 'category' => 'Condiments','unitCost' => 7,'quantity' => 1, 'total' =>7.00, 'invoice'=>9));
		InvoiceItem::create(array('description' => 'Ikura', 'category' => 'Seafood','unitCost' => 34,'quantity' => 1, 'total' =>34.00, 'invoice'=>9));
		InvoiceItem::create(array('description' => 'Chang', 'category' => 'Beverages','unitCost' => 14.00,'quantity' => 1, 'total' =>14.00, 'invoice'=>9));

		InvoiceItem::create(array('description' => 'Steeleye Stout', 'category' => 'Beverages', 'unitCost' => 11.00,'quantity' => 1, 'total' =>11.00, 'invoice'=>10));
		InvoiceItem::create(array('description' => 'Shichimi', 'category' => 'Condiments','unitCost' => 5,'quantity' => 1, 'total' =>5.00, 'invoice'=>10));
		InvoiceItem::create(array('description' => 'Boston Crab Meat', 'category' => 'Seafood','unitCost' => 25,'quantity' => 1, 'total' =>25.00, 'invoice'=>10));

		InvoiceItem::create(array('description' => 'Shichimi', 'category' => 'Condiments','unitCost' => 5,'quantity' => 1, 'total' =>5.00, 'invoice'=>11));
		InvoiceItem::create(array('description' => 'Chai', 'category' => 'Beverages','unitCost' => 13.00,'quantity' => 1, 'total' =>13.00, 'invoice'=>11));

		InvoiceItem::create(array('description' => 'Steeleye Stout', 'category' => 'Beverages', 'unitCost' => 11.00,'quantity' => 1, 'total' =>11.00, 'invoice'=>12));
		InvoiceItem::create(array('description' => 'Inlagd Sill', 'category' => 'Seafood','unitCost' => 18,'quantity' => 1, 'total' =>18.00, 'invoice'=>12));

		InvoiceItem::create(array('description' => 'Shichimi', 'category' => 'Condiments','unitCost' => 5,'quantity' => 1, 'total' =>5.00, 'invoice'=>13));
		InvoiceItem::create(array('description' => 'Ikura', 'category' => 'Seafood','unitCost' => 34,'quantity' => 1, 'total' =>34.00, 'invoice'=>13));
		InvoiceItem::create(array('description' => 'Inlagd Sill', 'category' => 'Seafood','unitCost' => 18,'quantity' => 1, 'total' =>18.00, 'invoice'=>13));
		InvoiceItem::create(array('description' => 'Chai', 'category' => 'Beverages','unitCost' => 13.00,'quantity' => 1, 'total' =>13.00, 'invoice'=>13));

		InvoiceItem::create(array('description' => 'Steeleye Stout', 'category' => 'Beverages', 'unitCost' => 11.00,'quantity' => 1, 'total' =>11.00, 'invoice'=>14));
		InvoiceItem::create(array('description' => 'Inlagd Sill', 'category' => 'Seafood','unitCost' => 18,'quantity' => 1, 'total' =>18.00, 'invoice'=>14));

		InvoiceItem::create(array('description' => 'Inlagd Sill', 'category' => 'Seafood','unitCost' => 18,'quantity' => 1, 'total' =>18.00, 'invoice'=>15));
		InvoiceItem::create(array('description' => 'Ipoh Coffee', 'category' => 'Beverages','unitCost' => 12.00,'quantity' => 1, 'total' =>12.00, 'invoice'=>15));
		InvoiceItem::create(array('description' => 'Pesto genovese', 'category' => 'Condiments','unitCost' => 7,'quantity' => 1, 'total' =>7.00, 'invoice'=>15));

		InvoiceItem::create(array('description' => 'Steeleye Stout', 'category' => 'Beverages', 'unitCost' => 11.00,'quantity' => 1, 'total' =>11.00, 'invoice'=>16));
		InvoiceItem::create(array('description' => 'Boston Crab Meat', 'category' => 'Seafood','unitCost' => 25,'quantity' => 1, 'total' =>25.00, 'invoice'=>16));
		InvoiceItem::create(array('description' => 'Shichimi', 'category' => 'Condiments','unitCost' => 5,'quantity' => 1, 'total' =>5.00, 'invoice'=>16));

		InvoiceItem::create(array('description' => 'Chang', 'category' => 'Beverages','unitCost' => 14.00,'quantity' => 1, 'total' =>14.00, 'invoice'=>15));
		InvoiceItem::create(array('description' => 'Inlagd Sill', 'category' => 'Seafood','unitCost' => 18,'quantity' => 1, 'total' =>18.00, 'invoice'=>15));

		InvoiceItem::create(array('description' => 'Steeleye Stout', 'category' => 'Beverages', 'unitCost' => 11.00,'quantity' => 1, 'total' =>11.00, 'invoice'=>17));
		InvoiceItem::create(array('description' => 'Inlagd Sill', 'category' => 'Seafood','unitCost' => 18,'quantity' => 1, 'total' =>18.00, 'invoice'=>17));

		InvoiceItem::create(array('description' => 'Shichimi', 'category' => 'Condiments','unitCost' => 5,'quantity' => 1, 'total' =>5.00, 'invoice'=>17));
		InvoiceItem::create(array('description' => 'Pesto genovese', 'category' => 'Condiments','unitCost' => 7,'quantity' => 1, 'total' =>7.00, 'invoice'=>17));
		InvoiceItem::create(array('description' => 'Chang', 'category' => 'Beverages','unitCost' => 14.00,'quantity' => 1, 'total' =>14.00, 'invoice'=>17));

		InvoiceItem::create(array('description' => 'Steeleye Stout', 'category' => 'Beverages', 'unitCost' => 11.00,'quantity' => 1, 'total' =>11.00, 'invoice'=>18));
		InvoiceItem::create(array('description' => 'Boston Crab Meat', 'category' => 'Seafood','unitCost' => 25,'quantity' => 1, 'total' =>25.00, 'invoice'=>18));

		InvoiceItem::create(array('description' => 'Inlagd Sill', 'category' => 'Seafood','unitCost' => 18,'quantity' => 1, 'total' =>18.00, 'invoice'=>19));
		InvoiceItem::create(array('description' => 'Ipoh Coffee', 'category' => 'Beverages','unitCost' => 12.00,'quantity' => 1, 'total' =>12.00, 'invoice'=>19));
		InvoiceItem::create(array('description' => 'Chang', 'category' => 'Beverages','unitCost' => 14.00,'quantity' => 1, 'total' =>14.00, 'invoice'=>19));

		InvoiceItem::create(array('description' => 'Steeleye Stout', 'category' => 'Beverages', 'unitCost' => 11.00,'quantity' => 1, 'total' =>11.00, 'invoice'=>20));
		InvoiceItem::create(array('description' => 'Ikura', 'category' => 'Seafood','unitCost' => 34,'quantity' => 1, 'total' =>34.00, 'invoice'=>20));
		InvoiceItem::create(array('description' => 'Pesto genovese', 'category' => 'Condiments','unitCost' => 7,'quantity' => 1, 'total' =>7.00, 'invoice'=>20));
	}

}
