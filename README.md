# Workshop Enrichment - Day-02

## Install Ionic

## Create App-2-3_Quiz

### Create App Framework

```bash
ionic start App-2-3_Quiz sidemenu --no-deps --no-link --no-git
```

### Remove pages ```Home``` and ```list```

### Fix ```app-routing.module```

```javascript
const routes: Routes = [
    {
        path: '',
        redirectTo: 'quiz',
        pathMatch: 'full'
    },
    {
        path: 'quiz',
        loadChildren: () =>
            import('./pages/quiz/quiz.module').then(m => m.QuizPageModule)
    }
];
```

### Fix ```app.component```

```javascript
    public appPages = [{ title: 'Quiz', url: '/quiz', icon: 'help' }];
```

### Create Quiz page

```bash
ionic generate page pages/Quiz
```

### Changer Sidemenu

```javascript
-
```

### Create Layout for Quiz Page: quiz.page.html

```html

ionic 
```

### Create CSS for Quiz Page: quiz.page.scss

```scss
-
```

### Create Programmcode Page: quiz.page.ts

```bash
ionic
```

### Fine Tuning

```bash
ionic 
```
