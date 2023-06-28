<?php
namespace App\Repositories;

use App\Contracts\InvitationContract;
use App\Models\Invitation;
use App\Models\User;

class InvitationRepository implements InvitationContract
{
    protected $model;

    function __construct()
    {
        $this->model=new InvitationRepository();
    }
    public function create($data)
    {
        return Invitation::create($data);
    }

    public function update($id, array $data)
    {
        $user = Invitation::findOrFail($id);
        $user->fill($data);
        $user->save();

        return $user;
    }

    public function delete($id)
    {
        return Invitation::destroy($id);
    }
}
?>
