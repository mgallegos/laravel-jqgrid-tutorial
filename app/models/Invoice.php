<?php

class Invoice extends Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'DEMO_Invoice';


	public function items()
	{
		return $this->has_many('InvoiceItem', 'invoice');
	}


}
