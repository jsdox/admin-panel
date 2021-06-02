<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Secondary\User;

class UserTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_example()
    {
        $response = $this->get('users/');

        $response->assertSeeText('login');
    }

    public function testUserCannotViewALoginFormWhenAuthenticated()
    {
        $user = User::factory()->make();
        $response = $this->actingAs($user)->get('/login');
        $response->assertRedirect('/dashboard');
    }

    public function testUserCanViewUsersWhenAuthenticated()
    {
        $this->withoutExceptionHandling();

        $user = User::factory()->make();
        $response = $this->actingAs($user)->get('/users');
        $response->assertSee('users')
            ->assertSee('phone')
            ->assertSee('gender')
            ->assertSee('view');
    }
}
