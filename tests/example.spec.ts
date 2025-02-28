import { test, expect } from '@playwright/test';

test('Login with email and password', async ({ page }) => {
    await page.goto('https://tcxlwhecho-testing.priverion.dev/login'); // Ir a la página de login

    // Paso 1: Ingresar el email
    await page.fill('input[name="email"]', 'brendajuliethfb19@gmail.com'); 
    await page.click('button#next'); // Ajusta el selector si es necesario

    // Paso 2: Esperar a que cargue el campo de contraseña
    await page.waitForSelector('input[name="password"]', { state: 'visible' });

    // Paso 3: Ingresar la contraseña
    await page.fill('input[name="password"]', 'Brenda123456.');
    await page.click('button#login'); // Ajusta el selector si es necesario

    // Paso 4: Esperar a que la URL cambie al dashboard
    await page.waitForURL('https://tcxlwhecho-testing.priverion.dev/dashboard');

    // Paso 5: Verificar el título de la página después del login
    await page.waitForLoadState('domcontentloaded');

    const pageTitle = await page.title();
    console.log(`Título de la página: ${pageTitle}`);

    // Ajusta el título esperado según lo que realmente se muestra
    await expect(page).toHaveTitle(/dashboard/i);
});
