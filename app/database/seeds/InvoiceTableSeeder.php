<?php

class InvoiceTableSeeder extends Seeder {

	public function run()
	{
		DB::table('DEMO_Invoice')->delete();

		Invoice::create(array('client' => 'Client A','number' => 1, 'date'=>date('2014-01-10'), 'country' => 'Canada'));
		Invoice::create(array('client' => 'Client B','number' => 2, 'date'=>date('2014-01-11'), 'country' => 'USA'));
		Invoice::create(array('client' => 'Client C','number' => 3, 'date'=>date('2014-01-12'), 'country' => 'Canada'));
		Invoice::create(array('client' => 'Client D','number' => 4, 'date'=>date('2014-01-13'), 'country' => 'USA'));
		Invoice::create(array('client' => 'Client E','number' => 5, 'date'=>date('2014-01-14'), 'country' => 'Canada'));
		Invoice::create(array('client' => 'Client F','number' => 6, 'date'=>date('2014-01-15'), 'country' => 'USA'));
		Invoice::create(array('client' => 'Client G','number' => 7, 'date'=>date('2014-01-16'), 'country' => 'Canada'));
		Invoice::create(array('client' => 'Client H','number' => 8, 'date'=>date('2014-01-17'), 'country' => 'USA'));
		Invoice::create(array('client' => 'Client I','number' => 9, 'date'=>date('2014-01-18'), 'country' => 'Canada'));
		Invoice::create(array('client' => 'Client J','number' => 10, 'date'=>date('2014-01-19'), 'country' => 'USA'));
		Invoice::create(array('client' => 'Client K','number' => 11, 'date'=>date('2014-01-20'), 'country' => 'Canada'));
		Invoice::create(array('client' => 'Client L','number' => 12, 'date'=>date('2014-01-21'), 'country' => 'USA'));
		Invoice::create(array('client' => 'Client M','number' => 13, 'date'=>date('2014-01-22'), 'country' => 'Canada'));
		Invoice::create(array('client' => 'Client N','number' => 14, 'date'=>date('2014-01-23'), 'country' => 'USA'));
		Invoice::create(array('client' => 'Client O','number' => 15, 'date'=>date('2014-01-24'), 'country' => 'Canada'));
		Invoice::create(array('client' => 'Client P','number' => 16, 'date'=>date('2014-01-25'), 'country' => 'USA'));
		Invoice::create(array('client' => 'Client Q','number' => 17, 'date'=>date('2014-01-26'), 'country' => 'Canada'));
		Invoice::create(array('client' => 'Client R','number' => 18, 'date'=>date('2014-01-27'), 'country' => 'USA'));
		Invoice::create(array('client' => 'Client S','number' => 19, 'date'=>date('2014-01-29'), 'country' => 'Canada'));
		Invoice::create(array('client' => 'Client T','number' => 20, 'date'=>date('2014-01-29'), 'country' => 'USA'));
	}

}
