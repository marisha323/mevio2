<?php
namespace App\Repositories;

use App\Contracts\ColumnContract;
use App\Models\Column;
use App\Models\User;

class ColumnRepository implements ColumnContract
{
    protected $model;

    function __construct()
    {
        $this->model=new ColumnRepository();
    }
       public function create($data)
    {
        return Column::create($data);
    }

    public function update($id, array $data)
    {
        $user = Column::findOrFail($id);
        $user->fill($data);
        $user->save();

        return $user;
    }

    public function delete($id)
    {
        return Column::destroy($id);
    }
}
?>
