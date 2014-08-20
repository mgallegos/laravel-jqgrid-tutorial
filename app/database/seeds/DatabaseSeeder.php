<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

		$this->call('InvoiceTableSeeder');

		$this->call('InvoiceItemTableSeeder');

		$this->call('BookTableSeeder');
	}

}
