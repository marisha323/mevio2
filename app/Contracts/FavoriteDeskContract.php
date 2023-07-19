<?php

namespace App\Contracts;

interface FavoriteDeskContract
{
    public function create($data);
    public function destroy($data);

    public function update($data);
}

