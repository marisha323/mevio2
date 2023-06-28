<?php
namespace App\Repositories;
use App\Contracts\PremiumContract;
use App\Models\Premium;
use App\Models\User;


class PremiumRepository implements PremiumContract
{

    protected $model;

    function __construct()
    {
        $this->model=new PremiumRepository();
    }
    public function create($data)
    {
        return Premium::create($data);
    }

    public function update($id, array $data)
    {
        $user = Premium::findOrFail($id);
        $user->fill($data);
        $user->save();

        return $user;
    }

    public function delete($id)
    {
        return Premium::destroy($id);
    }
}

?>
