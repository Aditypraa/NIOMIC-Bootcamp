@extends('layouts.app')

@section('content')
    @include('layouts.navbar') {{-- Navbar --}}

    @include('home._hero') {{-- Hero --}}
    @include('home._clients') {{-- Clients --}}
    @include('home._services') {{-- Services --}}
    @include('home._cta') {{-- Cta --}}
    @include('home._portofolio') {{-- Clients --}}




    @include('layouts.footer') {{-- Footer --}}
@endsection
